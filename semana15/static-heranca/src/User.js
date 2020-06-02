"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
var userTeste = new User("id01", "teste@gmail.com", "Bruno", "123");
console.log(userTeste.getId());
console.log(userTeste.getEmail());
console.log(userTeste.getName());
// Exercício 1
// A) Não.
// B) Só uma vez.
