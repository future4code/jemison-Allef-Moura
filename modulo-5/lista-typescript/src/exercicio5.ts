enum ROLE {
    ADMIN = "admin",
    USER = "user"
}

type Accounts = {
    name:string,
    email:string
    role:ROLE  
}


const accounts:Accounts[] = [
    {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]


const exercicio05 = (list:Accounts[]):string[] =>{
    const filterList:string[] = 
    list.filter((account)=> account.role === ROLE.ADMIN)
    .map((account)=> account.email)
    return filterList
}
console.table(exercicio05(accounts))