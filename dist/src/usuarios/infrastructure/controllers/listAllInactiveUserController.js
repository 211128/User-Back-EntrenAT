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
exports.ListAllInactiveUserController = void 0;
class ListAllInactiveUserController {
    constructor(listAllInactiveUserUseCase) {
        this.listAllInactiveUserUseCase = listAllInactiveUserUseCase;
    }
    // Método asincrónico 'run' que maneja la solicitud HTTP
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Llama al método 'run' del caso de uso para obtener la lista de usuarios inactivos
                let listAllUserInactive = yield this.listAllInactiveUserUseCase.run();
                // Comprueba si se obtuvo una lista válida de usuarios inactivos
                if (listAllUserInactive) {
                    // Si se obtuvo una lista válida, responde con un código de estado 200 y la lista en el cuerpo de la respuesta
                    return res.status(200).send({
                        status: "success",
                        data: {
                            listAllUserInactive: "usuarios inactivos obtenidos con exito"
                        }
                    });
                }
                else {
                    // Si no se obtuvo una lista válida, responde con un código de estado 404 (Not Found) u otro adecuado
                    return res.status(404).send({
                        status: "error",
                        message: "No se encontraron usuarios inactivos."
                    });
                }
            }
            catch (error) {
                // Si se produce un error durante la ejecución, captura el error aquí
                console.error("Error en ListAllUsersInactiveController:", error);
                // Responde con un código de estado 500 (Internal Server Error) y un mensaje de error genérico
                return res.status(500).send({
                    status: "error",
                    message: "Se produjo un error interno al procesar la solicitud."
                });
            }
        });
    }
}
exports.ListAllInactiveUserController = ListAllInactiveUserController;
