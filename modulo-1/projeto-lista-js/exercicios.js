// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const som = Number(2)+Number(1)
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Insirua altura:")) 
  const largura = Number(prompt("Insira largura:"))
  const area = altura * largura
  console.log(area) 
}




// EXERCÍCIO 02
function imprimeIdade() {
  const actyear = Number(prompt("Insira ano atual:"))
  const nascyear = Number(prompt("Insira seu ano de nascimento:"))
  const results = actyear - nascyear
  console.log(results)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso / (altura * altura)
  return Number(IMC.toFixed(1))
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Insira seu nome:")
  let Idade = prompt("Insira sua Idade:")
  let email = prompt("Insira o seu email:")
  let inf = (`Meu nome é ${nome}, tenho ${Number(Idade)} anos, e o meu email é ${email}.`)
  console.log(inf)

} 

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cores = []  
  let cor1 = prompt("Insira uma cor")
  let cor2 = prompt("Insira uma cor")
  let cor3 = prompt("Insira uma cor")
  cores.push(cor1, cor2, cor3)
  console.log(cores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let result = custo / valorIngresso
  return result
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tam1 = string1.length; 
  let tam2 = string2.length;
  return tam1 == tam2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0] 

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultimoElemento= array.pop()
  let primeiroElemento=array.splice(0,1)
  array.push(primeiroElemento[0])
  array.unshift(ultimoElemento)
  return array
  
   

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  return string1.toUpperCase()===string2.toUpperCase() 
  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoa = Number(prompt("Qual o ano atual?"))
  let anonasci = Number(prompt("Qual seu ano de nascimento?"))
  let anoid = Number(prompt("Qual o ano em que sua identidade foi emitida?"))
  let idade = anoa - anonasci
  let validade = anoa - anoid
  if(idade <= 20){
    if(validade - 5 >= 0) {
      console.log(true)
    } else { 
      console.log(false)
    }
  }

  if(idade > 20 && idade <=50 ){
    if(validade - 10 > 0) {
      console.log(true)
    } else { 
      console.log(false)
    }
  }

  if(idade > 50 ){
    if(validade - 15 > 0) {
      console.log(true)
    } else { 
      console.log(false)
    }
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
    return (true)
  } else{
    return (false)
  }
 }

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idadeLab =prompt("Você tem mais de 18 anos?")
  let ensM =prompt("Você possui ensino médio completo?")
  let dispon =prompt("Você possui disponibilidade exclusiva durante os horarios do curso?")
  if( (idadeLab === "sim") && (ensM === "sim") && (dispon === "sim")){
    console.log(true)
  } else {
    console.log(false)
  }
  }