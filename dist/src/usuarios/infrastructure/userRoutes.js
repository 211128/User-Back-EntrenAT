"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./controllers/dependencies");
const dependencies_2 = require("./controllers/dependencies");
const dependencies_3 = require("./controllers/dependencies");
const dependencies_4 = require("./controllers/dependencies");
const dependencies_5 = require("./controllers/dependencies");
const verifyToken_1 = require("./helpers/verifyToken");
exports.userRouter = express_1.default.Router();
// Ruta para registrar un usuario
exports.userRouter.post("/register", dependencies_1.registerController.run.bind(dependencies_1.registerController));
exports.userRouter.post('/login', dependencies_5.loginController.run.bind(dependencies_5.loginController));
exports.userRouter.put('/setinactive', verifyToken_1.validateToken, dependencies_1.setAsInactiveController.run.bind(dependencies_1.setAsInactiveController));
// Ruta para obtener todos los usuarios
exports.userRouter.get("/list", verifyToken_1.validateToken, dependencies_2.listAllUserController.run.bind(dependencies_2.listAllUserController));
// Ruta para obtener un usuario por su ID
exports.userRouter.get("/:id", verifyToken_1.validateToken, dependencies_3.getUserByIdController.run.bind(dependencies_3.getUserByIdController));
// Ruta para eliminar un usuario por su ID
exports.userRouter.delete("/:id", verifyToken_1.validateToken, dependencies_4.deleteUserByIdController.run.bind(dependencies_4.deleteUserByIdController));
