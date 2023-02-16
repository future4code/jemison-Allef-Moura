const exercicio08 = (word:string) =>{
    const qtylyrics = word.length

    if (qtylyrics ===0){
        return 1
    }
    
    let result  = 1

    for (let i = qtylyrics;i > 0; i --){
        result *= i ;
    }
    return result
}

console.log(exercicio08("cake"))