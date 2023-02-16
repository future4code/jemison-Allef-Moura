
const Description = (name:string, dataOfBirth:string):string=>{
    const [dia, mes, ano]  = dataOfBirth.split("/")
    const  Info:string =  `Ola me chamo ${name}, nasci no dia ${dia} do mes de ${mes} do ano ${ano}`
    return Info
}
console.log(Description(`Allef`, `10/12/1993`))