// import {DaoInterface} from "./DaoInterface"
// import Concessionaria from "./Concessionaria"

// export class ConcessionariaDao implements DaoInterface{
//     nomeTabela: string = "tb_concessionaria"

//     inserir(object: Concessionaria): boolean{
//         console.log("logica de insert")
        
//         return true
//     }

//     atualiazar(object: Concessionaria): boolean{
//         console.log("logica update")
        
//         return true
//     }

//     remover(id: number): Concessionaria{
//         console.log("logica delete")
        
//         return new Concessionaria("", [])
//     }

//     selecionar(id: number): Concessionaria{
//         console.log("logica select")
        
//         return new Concessionaria("", [])
//     }
    
//     selecionarTodos(): Array<Concessionaria>{
//         console.log("logica get all")

//         return [new Concessionaria("", [])]
//     }
// }