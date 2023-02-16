const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}


type merchant = {
    name:string,
    qty: number,
    value:number | string
}


const merchantStock:merchant[]=[
    { name: "MacMugffin", qty: 37, value: 51.040},
	{ name: "Vassoura voadora", qty: 56, value: 210.0},
	{ name: "Laço da verdade", qty: 32, value: 571.5},
	{ name: "O precioso", qty: 1, value: 9181.923},
	{ name: "Caneta de 250 cores", qty: 123, value: 17},
	{ name: "Plumbus", qty: 13, value: 140.44},
	{ name: "Pokebola", qty: 200, value: 99.9915}
]

const exercicio07 = (list:merchant[]):merchant[] => {
    list.forEach((item) => (item.value  = ajustaPreco(item.value as number)))

    const listOrder:merchant[] = list.sort(
        (a,b) => a.qty - b.qty
    )
    return listOrder
}

console.table(exercicio07(merchantStock))