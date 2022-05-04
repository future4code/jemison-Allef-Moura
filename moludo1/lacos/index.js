/*
                Exercicio 01 (interpretação)

let valor = 0
for(let i = 0; i < 5; i++ ) {
  valor += i
}

console.log(valor)
RESPOSTA: Resultado 10 (o For ele adiciona 1 até que seja e armazena na variavel valor. entao ele faz um sistema fibonacci, ele adciona e soma o total até chegar a 4 
no caso ficaria 1+2 = 3 ,  3+3= 6 e depois 6+4 = 10 )

                Exercicio 02 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
     if (numero > 18) {
		console.log(numero)
    }
}

RESPOSTA: 
a) Impressão  = 19, 21, 23, 25, 27, 30
b) Sim, tiramos o if e puxamos o numero do indice no console.log(numero[0])

                Exercicio 03

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
RESPOSTA: ele vai rodar enquanto quantidade atual for menos que a total que no caso é 4, e a cada vez que ele rodar ele vai adicionar 1 a quantidade atual e imprimir 1 asterisco por vez rodada.


                Exercicio 01 (Escrita)


const quantbic = Number(prompt("Quantos pets voce tem ?"))
let nomespet = [] 
let quantidadepet = 0
if (quantbic < 1){
    console.log("Que pena! Você pode adotar um pet")

}
while (quantbic > quantidadepet){
    let addnome = prompt("Quais são os nomes?")
    nomespet.push(addnome)
    console.log(nomespet)
    quantidadepet++

}

                Exercicio 02
*/
//a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
function imparray () {
	for(let cadaNumero of array){
		console.log(cadaNumero)
	}
}
imparray()

//b)
function div(){
    for(let numeros of array)
    console.log(numeros/10)


}
div()

//c)
function par(){
    for(let num of array)
    if (num %2 ===0){
        console.log(num)
    }
}
par()

//d)
function inde(){
    let resul = []
    for(i = 0; i < array.length; i++){
        resul.push(`O elemento do index ${i}, é ${array[i]}`)
        
    }
    console.log(resul)
}
inde()

//e)
function maxmin (){
    let max = -9999999 
    let min = 999999
   for (let numero of array){
       if (numero > max) {
           max = numero
       } 
       if (numero < min) {
           min = numero
       }
   }  
   console.log(`O maior valor é o ${max} e o menor é ${min}`)
}
maxmin()