"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido, carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.carroPref = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.buyCar = function (novoCarro) {
        this.carro = novoCarro;
    };
    Pessoa.prototype.youCar = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
