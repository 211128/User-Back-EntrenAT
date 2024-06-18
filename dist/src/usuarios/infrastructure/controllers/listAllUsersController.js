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
exports.ListAllUserController = void 0;
class ListAllUserController {
    constructor(listAllUserUseCase) {
        this.listAllUserUseCase = listAllUserUseCase;
    }
    run(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listAllUser = yield this.listAllUserUseCase.run();
                if (listAllUser && listAllUser.length > 0) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            users: listAllUser, // Cambié la clave a "users" para reflejar que estamos enviando una lista de usuarios
                        },
                    });
                }
                else {
                    return res.status(404).send({
                        status: "error",
                        message: "No se encontraron usuarios.",
                    });
                }
            }
            catch (error) {
                console.error("Error:", error);
                return res.status(500).send({
                    status: "error",
                    message: "Se produjo un error en el servidor.",
                });
            }
        });
    }
}
exports.ListAllUserController = ListAllUserController;
