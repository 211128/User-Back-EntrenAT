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
exports.DeleteUserUseCase = void 0;
class DeleteUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    /**
     * Elimina un usuario por su ID.
     * @param id El ID del usuario que se va a eliminar.
     * @returns Un mensaje de éxito o null si se produce un error.
     */
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Llama al método de repositorio para eliminar el usuario por su UUID.
                const deleteUser = yield this.userRepository.deleteUserById(id);
                if (deleteUser) {
                    // Si el usuario se eliminó correctamente, devuelve un mensaje de éxito.
                    return "Usuario eliminado correctamente." + "id: " + id;
                }
                else {
                    // Si el usuario no se encontró o no se pudo eliminar, devuelve un mensaje de error.
                    return "No se pudo eliminar el usuario.";
                }
            }
            catch (error) {
                // Maneja el error y registra un mensaje de error en la consola.
                console.error("Error al eliminar el usuario:", error);
                // Devuelve null para indicar un error.
                return null;
            }
        });
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
