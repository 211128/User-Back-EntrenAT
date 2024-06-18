import { VerifyLogin, User } from "../domain/user";
import { IUserRepository } from "../domain/userRepository";
import { ValidateLogin } from "../domain/validation/user";
import { validate } from "class-validator";


export class LoginUseCase {
    constructor(readonly usuarioRepository: IUserRepository) {}
    
    async run(
        email: string,
        password: string
    ): Promise<VerifyLogin | string | null> {
        // Puedes eliminar el código de validación con class-validator

        let post = new ValidateLogin(email, password)
        const validation = await validate(post)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const loginUser = await this.usuarioRepository.loginUser(email, password);
            return loginUser;
        } catch (error) {
            return null;
        }
    }
}
