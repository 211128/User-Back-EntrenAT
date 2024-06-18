import { User } from "../domain/user";
import { IUserRepository } from "../domain/userRepository";

export class DeleteUserUseCase {
    constructor(readonly userRepository: IUserRepository) {}
    
    /** 
     * Elimina un usuario por su ID.
     * @param id El ID del usuario que se va a eliminar.
     * @returns Un mensaje de éxito o null si se produce un error.
     */
    async run(id: number): Promise<void | any> {
        try {
            // Llama al método de repositorio para eliminar el usuario por su UUID.
            await this.userRepository.deleteUserById(id);
            
           
        } catch (error:any) {
            // Maneja el error y registra un mensaje de error en la consola.
            console.error("Error al eliminar el usuario:", error);
            
            // Devuelve null para indicar un error.
            throw({
                error:error,
                exception:error.message
            })
        }
    }
}
