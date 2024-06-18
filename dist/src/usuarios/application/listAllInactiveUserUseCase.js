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
exports.ListAllInactiveUserUseCase = void 0;
// Define la clase ListAllUserActiveUseCase
class ListAllInactiveUserUseCase {
    // Constructor que toma una instancia de IUsuarioRepository como argumento
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // Método asincrónico 'run' que devuelve una lista de usuarios activos o null en caso de error
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Intenta obtener la lista de usuarios activos llamando al método 'listAllUserIactive' del repositorio
                const listAllUser = yield this.userRepository.listAllInactiveUser();
                // Devuelve la lista de usuarios activos
                return listAllUser;
            }
            catch (error) {
                // Si se produce un error durante la ejecución, captura el error aquí
                console.error("Error en ListAllUserActiveUseCase:", error);
                // Devuelve null para indicar que ha habido un error
                return null;
            }
        });
    }
}
exports.ListAllInactiveUserUseCase = ListAllInactiveUserUseCase;
