// import {DaoInterface} from "./DaoInterface"
// import Pessoa from "./Pessoa"
// import Carro from "./Carro";

// export class PessoaDao implements DaoInterface{
    
//     nomeTabela: string = "tb_Pessoa"

//     inserir(object: Pessoa): boolean{
        
//         console.log("logica de insert")
//         return true;
//     }

//     atualiazar(object: Pessoa): boolean{
        
//         console.log("logica de update")
//         return true;
//     }

//     remover(id: number): Pessoa{
        
//         console.log("logica de delete")
//         return new Pessoa("pedro", "mustang", new Carro("corolla", 4))
//     }

//     selecionar(id: number): Pessoa{
        
//         console.log("logica de select")
//         return new Pessoa("flavia", "cruze", new Carro("prisma", 4))
//     }

//     selecionarTodos(): Array<Pessoa>{
        
//         console.log("logica de getAll")
//         return [new Pessoa("eros", "ferrari", new Carro("sonic", 4))]
//     }

// }