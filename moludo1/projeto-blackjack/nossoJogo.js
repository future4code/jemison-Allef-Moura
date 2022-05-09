/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!.")
let retorno = confirm("Quer iniciar uma nova rodada?")
if (retorno == true){
   console.log("Incio da rodada!")
   const cart1Usu = comprarCarta()
   const cart2Usu = comprarCarta()
   const cart1Comp = comprarCarta()
   const cart2Comp = comprarCarta()
   const resulUsu = cart1Usu.valor + cart2Usu.valor
   const resulComp = cart1Comp.valor + cart2Comp.valor
   let Usuário = console.log(`Usuário - cartas:${cart1Usu.texto} ${cart2Usu.texto}- pontuação ${resulUsu}`)
   let Computador = console.log(`computador - cartas:${cart1Comp.texto} ${cart2Comp.texto}- pontuação ${resulComp}`)
	   if (resulUsu === resulComp){
         console.log("EMPATE!")
      }else if ((resulUsu > resulComp) && (resulUsu <= 21)){
         console.log("O usuário GANHOU!")
      }else {
         console.log("O computador GANHOU!")
      }

}  else 
   {  
      console.log("O Jogo acabou!")
	
   }