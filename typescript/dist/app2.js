"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
//criar carros!
var car = new Carro_1.default("renegade", 4);
var car1 = new Carro_1.default("prisma", 4);
var car2 = new Carro_1.default("sonic", 4);
//lista de carros
var listaDeCarros = [car, car1, car2];
//let listaDeCarros: Carro[] = [car, car1, car2]
var concessionaria = new Concessionaria_1.default("rua europa", listaDeCarros);
//console.log(concessionaria.mostraListaDeCarros())
//comprar o carro
var cliente = new Pessoa_1.default("pedro", "mustang", new Carro_1.default("sonic", 4));
//console.log(cliente.carroPref())
concessionaria.mostraListaDeCarros().map(function (carro) {
    if (carro["modelo"] == cliente.carroPref()) {
        //compra carro!
        cliente.buyCar(carro);
    }
});
console.log(cliente.carroPref());
