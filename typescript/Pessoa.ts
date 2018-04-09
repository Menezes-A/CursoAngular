import Carro from './Carro'

export default class Pessoa{
    
    private nome: string
    private carroPreferido: string
    private carro: Carro 

    constructor(nome: string, carroPreferido: string, carro: Carro){

        this.nome = nome
        this.carroPreferido = carroPreferido
        this.carro = carro

    }

    public dizerNome(): string{
        
        return this.nome
    }

    public carroPref(): string {
       
        return this.carroPreferido
    }

    public buyCar(novoCarro: Carro): void{
     
        this.carro = novoCarro
    }

    public youCar(): Carro {
        
        return this.carro
    }
}