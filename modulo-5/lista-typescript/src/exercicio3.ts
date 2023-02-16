enum GENDER {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {
    name:string;
    year:number;
    gender:GENDER;
    points?: number
}

const Exercicio03 = (name:string, year:number, gender:GENDER, points?:number) => {

    if(points){
        return{
            name:name,
            year:year,
            gender:gender,
            points:points

        }
    }else {
        return {
            name:name,
            year:year,
            gender:gender
        }
    }
}
console.table(Exercicio03("Batman", 2022, GENDER.ACAO, 88))