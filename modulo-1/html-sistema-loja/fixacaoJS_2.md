function calculaPrecoTotal(quantidade) {
  let valor1 = quantidade * 1.30
  let valor2 = quantidade * 1
  if(quantidade < 12){
    return valor1
  }else
  return valor2
  
    
  }