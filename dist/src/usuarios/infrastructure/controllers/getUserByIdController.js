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
exports.GetUserByIdController = void 0;
class GetUserByIdController {
    constructor(getUserByIdUseCase) {
        this.getUserByIdUseCase = getUserByIdUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtener el ID del usuario desde los parámetros de la ruta (por ejemplo, /users/:uuid)
                const { id } = req.params;
                // Convertir el ID a número
                const userId = parseInt(id, 10);
                // Verificar si la conversión fue exitosa
                if (isNaN(userId)) {
                    return res.status(400).send({
                        status: "error",
                        message: "El ID proporcionado no es un número válido",
                    });
                }
                // Ejecutar el caso de uso para obtener el usuario por su ID
                const getUserById = yield this.getUserByIdUseCase.run(userId);
                if (getUserById) {
                    return res.status(200).send({
                        status: "success",
                        data: getUserById, // Use the actual user data retrieved from the use case
                    });
                }
                else {
                    // Enviar una respuesta de error si el usuario no se encontró
                    return res.status(404).send({
                        status: "error",
                        message: "El usuario no se encontró",
                    });
                }
            }
            catch (error) {
                // Manejar errores y enviar una respuesta de error genérica
                console.error("Error en GetUserByIdController:", error);
                return res.status(500).send({
                    status: "error",
                    message: "Error interno del servidor pochoclo",
                });
            }
        });
    }
}
exports.GetUserByIdController = GetUserByIdController;
