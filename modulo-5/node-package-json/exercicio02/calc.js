const operation = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

const calculator = () => {
    switch(operation){
        case 'add':
            return n1 + n2;
        break;
        case 'sub':
            return n1 - n2; 
            break; 
        case 'mult': 
            return n1 * n2; 
            break;
        case 'div':
            if (n2 ===0) {
                console.log('o Segundo numero deve ser no minimo 1');
            }else{
                return n1/n2;
            }
        default:
            console.log("seu resultado não foi encontrado")
            break;
    
}

}
console.log(calculator(n1 , n2))
