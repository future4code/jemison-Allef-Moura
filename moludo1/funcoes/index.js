/* EXERCICIO 1 (INTERPRETAÇÃO)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
RESPOSTA: A) 10,50
B) NÃO APARECERIA NADA, POR CONTA DE NAO CONTER O CONSOLE.LOG

EXERCICIO 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/*RESPOSTA: A) por conta o includes vai retornar false porque includes entra no ambito booleano
o lowercase transforma maisculo em minusculo mas nesse caso 
nao interfere no console.log sendo que só ira aparecer true ou false.
B)
     i.   Eu gosto de cenoura = true
     ii.  CENOURA é bom pra vista = true
     iii. Cenouras crescem na terra = true

        EXERCICIO 1 (CODANDO)


a)        
function myinf(){
    console.log("Eu sou Allef, tenho 28, moro em são josé dos pinhais e trabalho")
}
b)

function myinfo (nome, Idade, cidade, profissao) {
    let inf = (`eu sou ${nome}, tenho ${Number(Idade)} anos, moro em ${cidade} e sou ${profissao}`)
    
    return inf

}

myinfo("Allef",22, "São josé dos pinhais" , "trabalho")
console.log (`Eu sou Allef, tenho ${Number(28)} anos, moro em são jose dos pinhais e trabalho`)
 */
//                               EXERCICIO 2
//A)

/*
A)
function soma (n1, n2){

    return  n1 + n2
}
const result1 =  soma(10, 20)
console.log(result1)

B)
function boo (){
    const n1 = prompt("Insira um numero:")
    const n2 = prompt("Insira outro numero:")
    const bool = n1 > n2
    return bool


}

const result2 = boo()
console.log(result2)

C)

function par (){
    let n1 = Number(prompt("Insira um numero"))
    let result = n1%2        
    
return  result === 0

}
const resultados = par()
console.log(resultados)


D)

function frase(){
    let frs = prompt("Insira uma msg:")
    return frs


}
const frs = frase()
console.log(frs.toUpperCase(), frs.length)
*/



/*                             EXERCICIO 3



function soma(){
    const n1 = prompt("Digite um numero:")
    const n2 = prompt("Digite outro numero:")
    const som = Number(n1) + Number(n2)
    return som  

}
const result = soma()


function mult(){
    const n1 = prompt("Digite um numero:")
    const n2 = prompt("Digite outro numero:")
    const multi = Number(n1) * Number(n2)
    return multi 

}
const result2 = mult()


function sub(){
    const n1 = prompt("Digite um numero:")
    const n2 = prompt("Digite outro numero:")
    const subi = Number(n1) - Number(n2)
    return subi  

}
const result3 = sub()


function div(){
    const n1 = prompt("Digite um numero:")
    const n2 = prompt("Digite outro numero:")
    const divi = Number(n1) / Number(n2)
    return divi  

}
const result4 = div()
console.log (result, result2, result3, result4)
*/