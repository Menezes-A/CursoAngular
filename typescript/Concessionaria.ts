import Carro from './Carro'
import {InterfaceConcessionaria} from './InterfaceConcessionaria'

export default class Concessionaria implements InterfaceConcessionaria{

    private endereco: string 
    private listaDeCarros: Array<Carro>


    constructor(endereco: string, listaDeCarros: Array<Carro>){
        
        this.listaDeCarros = listaDeCarros
        this.endereco = endereco
    }

    public fornecerEndereco(): string{
       
        return this.endereco
    }

    public mostraListaDeCarros(): Array<Carro>{
       
        return this.listaDeCarros
    }

    public horarioFuncionamento(): string {
        return "De segunda a Sexta das 08:00 as 18:00"
    }
}