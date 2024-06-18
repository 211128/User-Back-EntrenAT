"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const token_1 = require("./token");
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.headers.authorization) {
        return res.status(400).send({ error: "No hay token" });
    }
    const token = req.headers.authorization.split(' ').pop();
    if (!token) {
        return res.status(400).send({ error: "Token no encontrado" });
    }
    const tokenData = yield (0, token_1.verifyToken)(token);
    if (tokenData && tokenData.name) {
        next();
    }
    else {
        return res.status(401).send({ error: "Token inválido" });
    }
});
exports.validateToken = validateToken;
