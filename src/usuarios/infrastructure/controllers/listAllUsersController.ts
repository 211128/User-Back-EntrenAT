import { Response } from "express";
import { ListAllUserUseCase } from "../../application/listAllUserUseCase";

export class ListAllUserController {
    constructor(readonly listAllUserUseCase: ListAllUserUseCase) {}

    async run(_req: any, res: Response) {
        try {
            const listAllUser = await this.listAllUserUseCase.run();
            console.log(listAllUser);
            if (listAllUser && listAllUser.length > 0) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        users: listAllUser, 
                    },
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    message: "No se encontraron usuarios.",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send({
                status: "error",
                message: "Se produjo un error en el servidor.",
            });
        }
    }
}
