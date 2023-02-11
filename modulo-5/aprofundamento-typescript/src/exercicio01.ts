let minhaString:string  = "teste"
// A) se atriubuir numero a variavel ela da erro por conta do de nao poder atribuir numero a uma variavel tipada como string.

let meuNumero:number = 10
let meuNumeroString: string | number = "string "
//B) Para usar dois types, é só usar UNION TYPES atribuindo dos tipos para a mesma variavel

type Pessoa  =  {
    nome:string, 
    idade:number
    
}


enum CoresFav   {
    verde = "Verde",
    vermelho = "Vermelho",
    azul = "Azul",
    amarelo = "amarelo"
}

const user1 = {
    nome: "Allef",
    idade:28,
    corFavorita:CoresFav.amarelo
}
const pessoa2= {
    nome: "Jaque",
    idade:26,
    corFavorita:CoresFav.amarelo
}
const pessoa3 = {
    nome: "Cake",
    idade:3,
    corFavorita:CoresFav.vermelho
}





