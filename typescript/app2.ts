import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

//criar carros!
let car = new Carro("renegade", 4)
let car1 = new Carro("prisma", 4)
let car2 = new Carro("sonic", 4)


//lista de carros
let listaDeCarros: Array<Carro> = [car, car1, car2]
//let listaDeCarros: Carro[] = [car, car1, car2]

let concessionaria = new Concessionaria("rua europa", listaDeCarros)

//console.log(concessionaria.mostraListaDeCarros())

//comprar o carro
let cliente = new Pessoa("pedro", "mustang", new Carro("sonic", 4))

 //console.log(cliente.carroPref())

 concessionaria.mostraListaDeCarros().map((carro: Carro) => {
    
   if(carro["modelo"] == cliente.carroPref()){

        //compra carro!
      cliente.buyCar(carro)
    }

 })

 console.log(cliente.carroPref())
 