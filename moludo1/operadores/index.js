/*Exercicio 1 (interpretação)

const bool1 = true
const bool2 = false
const bool3 = !bool2 (TRUE)

let resultado = bool1 && bool2
console.log("a. ", resultado)
RESULTADO FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
RESULTADO FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
RESULTADO TRUE

console.log("d. ", typeof resultado)
RESULTADO BOOLEAN

Exercicio 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

Vai resultar na soma do digitado pelo aluno como string. EX: 10+10 = 1010

console.log(soma)

Exercicio 3

para dar certo a soma acima precisa usar a função Number;
EX: const soma = Number(primeiroNumero)+ Number(segundoNumero)
*/

//Exercico 1 (Escrita de cód.)

let myold = Number(prompt ('Qual sua idade?'))
let oldbff = Number(prompt ('Qual a idade do seu BFF?'))
let diff = myold-oldbff
let diff2 = myold > oldbff 

console.log (' Sua idade é maior do que a do seu BFF?', diff2 )
console.log ('Diferença de idade é:', diff)

// Exercicio 2

let par = Number(prompt('Insira um numero PAR:'))
let resto = par%2
// Se o usuario inserir PAR vai sempre dar 0
// Se o usuario inserir IMPAR vai sempre dar 1
console.log('resultado da divisão por 2', resto)

//Exercicio 3

let myold2 = Number(prompt("Qual sua idade?"))
let mounth = myold2 * 12
let hours = myold2 * 24
let days = myold2 * 365

console.log("Sua idade é:", myold2, "Sua idade em meses:", mounth, "Sua idade em dias:", days, "Sua idade em horas:", hours);


//Exercicio 4

const n1 = Number(prompt("Insira um numero:"))
const n2 = Number(prompt("Insira outro numero:"))

let result1 = n1>n2
let result2 = n1===n2
let result3 = n1%n2 === 0 
let result4 = n2%n1 === 0
console.log("O primeiro numero é maior que segundo?",result1);
console.log("O primeiro numero é igual que segundo?",result2);
console.log("O primeiro numero é divisível pelo segundo?",result3 )
console.log("O segundo numero é divisível pelo primeiro?",result4)