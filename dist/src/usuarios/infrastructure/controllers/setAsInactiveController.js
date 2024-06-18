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
exports.SetAsInactiveController = void 0;
class SetAsInactiveController {
    constructor(setAsInactiveUseCase) {
        this.setAsInactiveUseCase = setAsInactiveUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id, } = req.body;
                let InactivatedUser = yield this.setAsInactiveUseCase.run(id);
                if (InactivatedUser) {
                    return res.status(200).send({
                        status: "succes",
                        data: {
                            InactivatedUser: "usuario: " + id + " inactivo",
                        }
                    });
                }
                if (!InactivatedUser) {
                    return res.status(404).send({
                        status: "error",
                        message: "no hay usuario con esa id."
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "ocurrio un error al intentar inactivar un usuario."
                });
            }
        });
    }
}
exports.SetAsInactiveController = SetAsInactiveController;
