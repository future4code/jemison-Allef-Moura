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
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}