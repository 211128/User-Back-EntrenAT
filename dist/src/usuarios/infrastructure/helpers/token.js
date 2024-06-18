"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.tokenSigIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const tokenSigIn = (name, email) => {
    return jsonwebtoken_1.default.sign({
        name: name,
        email: email
    }, process.env.KEY_TOKEN, {
        expiresIn: '74h'
    });
};
exports.tokenSigIn = tokenSigIn;
const verifyToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, process.env.KEY_TOKEN);
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
