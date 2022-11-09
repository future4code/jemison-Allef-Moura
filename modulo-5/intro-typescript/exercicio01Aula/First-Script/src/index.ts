import {carros, carsModels} from './data'

const buscarCarrosPorMarca = (frota:carsModels[], marca?:string ): carsModels[] =>{
    if(marca===undefined){
        return frota
    }
    return frota.filter((carro:carsModels)=>{
        return carro.marca===marca
    })
}

console.table(buscarCarrosPorMarca(carros,'importado'))

// let n1:number;
// let n2:number;
// n1 = 10
// n2 = 20

// const sum = (a:number, b:number):string => {
//     const sum = a + b
//     return `A soma é ${sum}`
// }
// console.log(sum(10,20))

// type Person ={
//     name:"Allef",
//     age:"28"
// }

