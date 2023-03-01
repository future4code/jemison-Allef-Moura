export type Trasations = {
    value:number,
    date: Date,
    description:string
}


export type DataBank =  {
   name:string,
    cpf:number,
    dateOfBirth: Date,
    balance:number,
    statament:Array<Trasations>,

}