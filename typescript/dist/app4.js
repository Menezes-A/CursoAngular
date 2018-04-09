"use strict";
// import { ConcessionariaDao } from "./ConcessionariaDao"
// import {PessoaDao} from "./PessoaDao"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var Dao_1 = require("./Dao");
// let dao: ConcessionariaDao = new ConcessionariaDao()
// let dao1: PessoaDao = new PessoaDao()
var concessionaria = new Concessionaria_1.default(" ", []);
var pessoa = new Pessoa_1.default("pedro", "corolla", new Carro_1.default("sonic", 4));
var dao3 = new Dao_1.Dao();
var dao4 = new Dao_1.Dao();
dao3.inserir(pessoa);
dao4.atualiazar(concessionaria);
