import Carro from './Carro'
import Moto from "./Moto"
import Concessionaria from "./Concessionaria"

let carro = new Carro("sonic", 4)
let moto = new Moto()
let concessionaria = new Concessionaria(" ", [])

moto.acelerar()
carro.acelerar()

console.log(carro)
console.log(moto)
console.log(concessionaria.horarioFuncionamento())