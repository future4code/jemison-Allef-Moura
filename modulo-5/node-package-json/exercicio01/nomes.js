const nome = process.argv[2]
const idade = Number(process.argv[3])



const Ola = (nome, idade, idadeMaior) => {
    return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade +7}`//`Olá, ${nome} ! Você tem ${idade} anos.` 
}

console.log(Ola(nome, idade)) 