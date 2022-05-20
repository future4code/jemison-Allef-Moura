// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
      
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a- b);

  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   function buscarNumerosPares (value) {
      if (value % 2 == 0) 
      return value;
  }
  var numerosPares = array.filter(buscarNumerosPares);
  return numerosPares

}
   

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   function buscarNumerosPares (value) {
      if (value % 2 == 0) 
      return value;
  }
  var numerosPares = array.filter(buscarNumerosPares);
  function elevado (item){
      return Math.pow(item, 2) 
  }
   return numerosPares.map(elevado)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   var maior = Math.max.apply(null, array)
   return maior 

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   var ativ = {
      maiorNumero: 0,
      maiorDivisivelPorMenor: false,
      diferenca: 0 
   }
   if (num1 > num2){
      ativ.maiorNumero = num1
      if (num1 % num2 == 0 ){
      ativ.maiorDivisivelPorMenor = true  

      
      }  
     ativ.diferenca = num1 - num2 
   }else {
      ativ.maiorNumero = num2
      if (num2 % num1 == 0 ){
      ativ.maiorDivisivelPorMenor = true  
 }  
     ativ.diferenca = num2 - num1  
   }  
   return ativ 
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let pares = []
   let numeros = 0 
   while (pares.length < n){
      
      pares.push(numeros)
      numeros+=2;
   }return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
      return "Equilátero"
   }else 
      if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
      return "Escaleno"
      }else 
      return "Isósceles"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   array.sort((a, b) => a- b);
   let segundoMaior = array[array.length-2]
   let segundoMenor = array[1]
   return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let nomes = filme.atores.join(", ")
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${nomes}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
      let anonimizada = {
         ...pessoa,
         nome:"ANÔNIMO"
      }
   return (anonimizada)
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(pessoa => {
      return ((pessoa.idade > 14 && pessoa.idade < 60)
          && pessoa.altura > 1.5)
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNãoAutorizadas = pessoas.filter((pessoas, idex, array) =>{
   return (pessoas.idade <= 14 || pessoas.idade > 60 || pessoas.altura < 1.5)
      
   })
   return(pessoasNãoAutorizadas)
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for ( let conta of contas){
     while (conta.compras.length > 0){
     let ultimaCompra = conta.compras.pop()
     conta.saldoTotal = conta.saldoTotal - ultimaCompra 
      
   }
 }return contas  
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   consultas.sort(function(a, b){
     return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  })
  return (consultas)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}