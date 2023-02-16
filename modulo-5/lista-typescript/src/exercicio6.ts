type account = {
    client: string,
    bankBalance: number,
    debit:number[]
}

const clientList:account[] = [
    { client: "João", bankBalance: 1000, debit: [100, 200, 300] },
	{ client: "Paula", bankBalance: 7500, debit: [200, 1040] },
	{ client: "Pedro", bankBalance: 10000, debit: [5140, 6100, 100, 2000] },
	{ client: "Luciano", bankBalance: 100, debit: [100, 200, 1700] },
	{ client: "Artur", bankBalance: 1800, debit: [200, 300] },
	{ client: "Soter", bankBalance: 1200, debit: [] }
]


const exercicio06 = (list:account[]):account[] =>{
    list.forEach((client) =>{
        const totalDebit = client.debit.reduce((a,b) => a + b , 0)
            client.bankBalance -= totalDebit
            client.debit= [];
        })
        const negativeAccount = list.filter((account)=> account.bankBalance < 0)
        return  negativeAccount
    }
    console.table(exercicio06(clientList))
