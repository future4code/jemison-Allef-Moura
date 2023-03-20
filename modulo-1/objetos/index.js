/*              Exercicio 1 (interpretação)

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

RESPOSTA; 
a) Matheus Nachtergaele
b) Virginia Cavendish

                Exercicio 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

RESPOSTA;
a) 
Nome:"juca", idade 3, raça "srd"
Nome:"juba", idade 3, raça "srd"
Nome:"jubo", idade 3, raça "srd"
b)
os 3 pontos significa ESPALHAMENTO ou SPREAD, nada mais é que puxar informações de outro objeto, podendo ser alterado sem danificar a formação do original.

                Exercicio 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

RESPOSTA:
a)
False
Undefined
b)
deu false porque backender no objeto é FALSE, já altura deu undefined porque nao tem altura no objeto.

                Exercicio 1 (Escrita de código)
//a)
const pessoa = {
    nome:"Allef",
    apelidos: ["alle", "olaf", "andré"]

}
console.log("Eu sou", pessoa.nome, "mas pode me chamar de:",pessoa.apelidos[0], pessoa.apelidos[1], "ou", pessoa.apelidos[2])

const newname = {
    ...pessoa,
    alterar:{
    apelidos: ["debruyne", "vandik", "haaland"]
    
    }


}
//b)
console.log("Eu sou", pessoa.nome, "mas pode me chamar de:",newname.alterar.apelidos[0], newname.alterar.apelidos[1], "ou", newname.alterar.apelidos[2])

                Exercicio 2

const pss1 = {
    nome: "Allef",
    idade: 28,
    profissao: "operador" 
}

const pss2 = {
    nome:"batman",
    idade:30,
    profissao:"superheroi"

}

function primeirafunc (lista){
    see = [lista.nome,lista.nome.length,lista.idade,lista.profissao,lista.profissao.length]
return see
}


console.log(primeirafunc(pss1))
console.log(primeirafunc(pss2))

                Exercicio 3

// a)
let carrinho = []

//b)
const ameixa = {
    nome:"ameixa",
    disponivel: true
}

const mamao = {
    nome:"mamão",
    disponivel: true
}

const laranja = {
    nome:"laranja",
    disponivel: true

}
//c)
function comprando(fruta){
    carrinho.push(fruta)
    return carrinho

}

comprando(laranja)
comprando(ameixa)
console.log(comprando(mamao))
*/