// import { ConcessionariaDao } from "./ConcessionariaDao"
// import {PessoaDao} from "./PessoaDao"

import Concessionaria from "./Concessionaria"
import Pessoa from "./Pessoa"
import Carro from "./Carro"
import {Dao} from "./Dao"

// let dao: ConcessionariaDao = new ConcessionariaDao()
// let dao1: PessoaDao = new PessoaDao()

let concessionaria: Concessionaria = new Concessionaria(" ", [])
let pessoa = new Pessoa("pedro", "corolla", new Carro("sonic", 4))

let dao3: Dao<Pessoa> = new Dao<Pessoa>()
let dao4: Dao<Concessionaria> = new Dao<Concessionaria>()

dao3.inserir(pessoa)
dao4.atualiazar(concessionaria)


