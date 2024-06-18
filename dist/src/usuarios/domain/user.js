"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyLogin = exports.User = void 0;
class User {
    constructor(id, name, email, password, height, weight, sex) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }
}
exports.User = User;
class VerifyLogin {
    constructor(id, name, email, token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.token = token;
    }
}
exports.VerifyLogin = VerifyLogin;
