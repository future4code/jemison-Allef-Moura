/* 
                // Exercicio 01 (interpretacao)

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  RESPOSTA: 
  a) vai indexar cada uma das chaves e imprimir as 3 chaves indexidas. 
 

                // Exercicio 02
 
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
RESPOSTA:
a) vai ser impresso o nome de cada objeto. 

                // Exercicio 03

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  RESPOSTA:
  a) vai ser impresso nome e apelido da Laís e Amanda.
  
                Exercicio 01 (Escrita de cod)
*/
// a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const petsname = pets.map((petss, index, array) => {
     return petss.nome

 })
//  console.log(petsname)

// b)
 const onlysals = pets.filter((petss, indice, array) =>{
    return petss.raca === "Salsicha"
})
// console.log(onlysals)

// c)


 const podre = pets.filter((pet, indice, array) =>{
    return pet.raca === "Poodle"
}) 
const nomenew = podre.map((pet, indice, array) =>{
    return pet.nome
})

// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomenew[0]}!` , `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomenew[1]}!`)

                // Exercicio 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// a)
 const namesprod = produtos.map((prod, indice, array) =>{
    return prod.nome

 })
console.log(namesprod)

// b)
const nameprc = produtos.map((prod, indice, prec) =>{
    return {
    "nome": prod.nome,
    "preco": (prod.preco*0.95).toFixed(2)
    
    }


})
console.log(nameprc)

// c)

const   bebidas = produtos.filter((prod, indice, array) =>{
    return prod.categoria === "Bebidas"

})
const sobebi = bebidas.map((prod, indice, array) =>{
    return {
        "nome":prod.nome,
        "categoria":prod.categoria,
        "preco":prod.preco
    }

})
console.log(sobebi)

// d)
const ypeonly = produtos.filter((prod) =>{
    return prod.nome.includes("Ypê")

})
    
console.log(ypeonly)

// e)
const compre = ypeonly.map((prod, indice, array) =>{
    return `Compre ${prod.nome} por R$ ${prod.preco}`

})

console.log(compre)


