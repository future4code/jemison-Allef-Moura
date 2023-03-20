/*                Exercicio 01 (interpretação)

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
RESPOSTA:
a) o código testa se o numero digitado pelo usuario é PAR, se for PAR passa no teste.
b) Numeros PAR
c) Numeros IMPARES

                Exercicio 02

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
RESPOSTA:
a) Para falar o preço de uma fruta escolhida pelo usuario
b) "O preço da fruta", Maça, "é", "R$", 5)
c) o código nao para de ser executado e o preço da Pêra vai para 5

                Exercicio 03

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
REPOSTA:
a) A primeira linha pede para o usuario inserir um numero.
b) Numero 10, "Esse numero passou no teste" e logo em seguida "Essa mensagem é secreta!!!"
se o usuario colocasse -10,não vai aparecer nada no console, por que nao entra na condição. 


                Exercicio 01 (Escrita de cod.)

const idadecond = Number(prompt("Insira sua idade:"))

    if (idadecond >= 18 ){
        console.log("Você pode dirigir, basta apenas tirar a CHN.")

    }else{
        console.log("Você não possui idade minima para dirigir; #CHATEADO(a)")
    }

                Exercicio 02

const turno = prompt("Insira o Turno que voce estuda com M(matutino), V(vesperino) ou N(noturno):")
    let caixabaixa = turno.toLowerCase()
    
    if (caixabaixa === "m"){
        console.log("Bom Dia!!")

    }else if (caixabaixa === "v"){
        console.log("Boa Tarde!")
    }else if (caixabaixa === "n"){
        console.log("Boa Noite!!")

    }

                Exercicio 03

const turno = prompt("Insira o Turno que voce estuda com M(matutino), V(vesperino) ou N(noturno):")
    let caixabaixa = turno.toLowerCase()
    switch (caixabaixa){
        case "n":
            console.log("Boa Noite!!")
            break
        case "m":
            console.log("Bom Dia!!")
            break
        case "v":
            console.log("Boa Tarde!!")
            break
    
    }

                Exercicio 04

const namefilm = prompt("Qual o genero do filme que voce quer assistir:")
    let lowc = namefilm.toLowerCase()
const price = Number(prompt("Qual o valor de ingresso?"))

    if  (lowc === "fantasia" && price <= 15){
        console.log("Bom filme!")

}   else {
    console.log("Escolha outro filme")
}
    
                Desafio 01

let carrinho = []
const namefilm = prompt("Qual o genero do filme que voce quer assistir:")
    let lowc = namefilm.toLowerCase()
const price = Number(prompt("Qual o valor de ingresso?"))
//const snack = prompt("Qual snack voce quer comprar?")
//const snac = snack === "chocolate" && "pipoca" && "doce"
    if  (lowc === "fantasia" && price <= 15){
       let snack = prompt("Qual snack voce quer comprar?")
       let resul = snack 
       console.log(`Bom filme!.
       Aproveite o seu ${resul} `)
    }else {
    console.log("Escolha outro filme")
}
                */

    