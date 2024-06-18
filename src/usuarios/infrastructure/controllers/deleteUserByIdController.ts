import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/deleteUserById";

export class DeleteUserController {
    constructor(readonly deleteUserUseCase: DeleteUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { id } = req.body;

            if (!id) {
                return res.status(400).send({
                    status: "error",
                    message: "Se requiere un ID válido en la solicitud.",
                });
            }

            await this.deleteUserUseCase.run(id);

            res.status(204).json({
                message:"Usuario eliminado correctamente"
            });
            
            
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            return res.status(500).send({
                status: "error",
                message: "Se produjo un error en el servidor al eliminar el usuario.",
            });
        }
    }
}
