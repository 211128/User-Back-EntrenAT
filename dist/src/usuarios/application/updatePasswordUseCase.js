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
exports.UpdatePasswordUseCase = void 0;
class UpdatePasswordUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(id, password, cpassword) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(password + "----" + cpassword);
            try {
                // Validar que las contraseñas coincidan
                if (password !== cpassword) {
                    throw new Error("Las contraseñas no coinciden.");
                }
                // Llamar al repositorio para actualizar la contraseña
                const updatePasswordById = yield this.userRepository.updatePassword(id, password, cpassword);
                if (updatePasswordById) {
                    return updatePasswordById;
                }
                else {
                    throw new Error("Usuario no encontrado o no actualizado.");
                }
            }
            catch (error) {
                console.error("Error al actualizar la contraseña:", error.message);
                throw new Error("Se produjo un error al actualizar la contraseña.");
            }
        });
    }
}
exports.UpdatePasswordUseCase = UpdatePasswordUseCase;
