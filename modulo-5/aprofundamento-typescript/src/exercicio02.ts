type Estatiscas = {
    maior:number,
    menor:number,
    media:number
}
type AmostraDeIdades = {
    numeros:number[]
    obterEstatiscas:(numeros:number[])=>Estatiscas
}

function obterEstatiscas (numeros:number[]):Estatiscas{
    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for  (let num of numeros){
        soma += num
    }

    const estatiscas:Estatiscas = {
        maior: numerosOrdenados [numeros.length - 1],
        menor: numerosOrdenados [0],
        media: soma / numeros.length
    }
    return estatiscas
}