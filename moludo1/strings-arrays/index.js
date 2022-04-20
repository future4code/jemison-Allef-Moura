/* Exercicio 1 (interpretação)
a)
let array
console.log('a. ', array)
REPOSTA: A. UNDEFINED

b)
array = null
console.log('b. ', array)
RESPOSTA: B. NULL

c)
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
RESPOSTA: C. 11

d)
let i = 0
console.log('d. ', array[i])
RESPOSTA: 3 ( 0 referente ao primeiro numero da lista do cód acima) 

e)
array[i+1] = 19
console.log('e. ', array)
RESPOSTA: 3,19 ( substituiu o 4 na ordem da lista dos cód acima)

d)
const valor = array[i+6]
console.log('f. ', valor)
RESPOSTA: 9 ele soma a posição i(0) = 3 da lista ou seja 3+6

Exercicio 2 

const frase = prompt("Subi num ônibus em Marrocos")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

RESPOSTA: "SUBI NUM ÔNIBUS EM MIRROCOS" (27)
*/

//Exercicio 1 ( escritra de código)
/*
let nome = prompt("Qual seu Nome?")
let email = prompt("Qual seu email?")
console.log(`o e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo ${nome}`)

Exercicio 2

a)

let comidas = [
    "pizza",
    "humburguer", 
    "cachorro-quente", 
    "churrasco", 
    "japones"]
console.log(comidas)
// b)
console.log ("Essas são minhas comidas preferidas:")
console.log ( comidas[0])
console.log ( comidas[1])
console.log ( comidas[2])
console.log ( comidas[3])
console.log ( comidas[4])
// c)

let newfood = prompt("insira o nome de uma o comida:")
let a = 1
comidas[a] = newfood
console.log(comidas)
/*
Exercicio 3


// a)

let listaDeTarefas = []
let tarefas = prompt("Insira uma tarefa:") 
let tarefa2 = prompt("insira segunda tarefa:")
let tarefa3 = prompt("Insira terceira tarefa:")

listaDeTarefas.push(tarefas, tarefa2, tarefa3)
//listaDeTarefas.push(tarefa2)
//listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const ido = prompt("insira 0, 1 ou 2 para remover uma tarefa:")

listaDeTarefas.splice(ido,1)
console.log(listaDeTarefas)

*/