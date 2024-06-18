"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const userRoutes_1 = require("./src/usuarios/infrastructure/userRoutes");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
// Rutas relacionadas con usuarios
app.use(userRoutes_1.userRouter);
app.listen(8080, () => {
    signale.success("Server online in port 8080");
});
