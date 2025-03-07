import { RegisterUseCase } from "../../application/registerUseCase";
import { UserMysqlRepository } from "../userMysqlRepository";
import { RegisterController } from "./registerController";

import { ListAllUserController } from "./listAllUsersController";
import { ListAllUserUseCase } from "../../application/listAllUserUseCase";

import { DeleteUserController } from "./deleteUserByIdController";
import { DeleteUserUseCase } from "../../application/deleteUserById";

import { GetUserByIdController } from "./getUserByIdController";
import { GetUserByIdUseCase } from "../../application/getUserByIdUseCase";



import { SetAsInactiveController } from "./setAsInactiveController";
import { SetAsInactiveUseCase } from "../../application/setAsInactiveUseCase";
import { LoginController } from "./loginController";
import { LoginUseCase } from "../../application/loginUseCase";

export const userMysqlRepository = new UserMysqlRepository();

export const registerUseCase = new RegisterUseCase(userMysqlRepository);
export const registerController = new RegisterController(registerUseCase);


export const loginUseCase = new LoginUseCase(userMysqlRepository)
export const loginController = new LoginController(loginUseCase)

export const listAllUseCase = new ListAllUserUseCase(userMysqlRepository)
export const listAllUserController = new ListAllUserController(listAllUseCase)

export const deleteUserUseCase = new DeleteUserUseCase(userMysqlRepository)
export const deleteUserByIdController = new DeleteUserController(deleteUserUseCase)

export const getUserByIdUseCase = new GetUserByIdUseCase(userMysqlRepository)
export const getUserByIdController = new GetUserByIdController(getUserByIdUseCase) 


export const setAsInactiveUseCase = new SetAsInactiveUseCase(userMysqlRepository)
export const setAsInactiveController = new SetAsInactiveController(setAsInactiveUseCase)






