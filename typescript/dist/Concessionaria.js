"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.listaDeCarros = listaDeCarros;
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostraListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.horarioFuncionamento = function () {
        return "De segunda a Sexta das 08:00 as 18:00";
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
