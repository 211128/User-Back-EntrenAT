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
exports.UpdatePasswordController = void 0;
class UpdatePasswordController {
    constructor(updatePasswordUseCase) {
        this.updatePasswordUseCase = updatePasswordUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id, password, cpassword, } = req.body;
                // Llama al caso de uso para actualizar la contraseña
                let updatePassword = yield this.updatePasswordUseCase.run(id, password, cpassword);
                if (updatePassword) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            update_user: "se ahtuaslizó el usuario con la id: " + id,
                        },
                    });
                }
                else {
                    return res.status(404).send({
                        status: "error",
                        message: "Usuario no encontrado o no actualizado.",
                    });
                }
            }
            catch (error) {
                console.error("Error al actualizar la contraseña:", error);
                return res.status(500).send({
                    status: "error",
                    message: "Se produjo un error al actualizar la contraseña.",
                });
            }
        });
    }
}
exports.UpdatePasswordController = UpdatePasswordController;
