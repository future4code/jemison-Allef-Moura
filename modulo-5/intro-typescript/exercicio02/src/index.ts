const cor1:string = process.argv[2]
const cor2:string = process.argv[3]
const cor3:string = process.argv[4]

const  imprimeTresCoresFavoritas = (cor1:string, cor2:string, cor3:string) => {
    return `As cores são ${cor1}, ${cor2}, ${cor3}`
}

console.log(imprimeTresCoresFavoritas(cor1, cor2, cor3))