enum Sectors  {
    MARKETING = "marketing",
    VENDAS = "vedas",
    FINANCEIRO = "financeiro"
}

type Persons = {
    name: string
    salary:number,
    sector:Sectors,
    presential: boolean;
}

const listOfWorkers:Persons [] = [
    {name: "Marcos", salary: 2500, sector: Sectors.MARKETING, presential: true },
    {name: "Maria", salary: 1500, sector: Sectors.VENDAS, presential: false },
    {name: "Saulo", salary: 2200, sector: Sectors.FINANCEIRO, presential: true },
    {name: "João", salary: 2800, sector: Sectors.MARKETING, presential: false },
    {name: "Josué", salary: 5500, sector: Sectors.FINANCEIRO, presential: true },
    {name: "Natalia", salary: 4700, sector: Sectors.VENDAS, presential: true },
    {name: "Paola", salary: 3500, sector: Sectors.MARKETING, presential: true }
]

 const exercicio04 = (list: Persons[]):Persons[] =>{
    const filterList:Persons[] = list.filter((person) =>{
        return person.sector === Sectors.MARKETING && person.presential;
    })
    return filterList
 }
console.table(exercicio04(listOfWorkers))