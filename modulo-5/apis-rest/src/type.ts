export type Peoples = {
    id:number,
    name:string,
    email:string,
    type:UserType,
    age:number
}

export enum UserType  {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}