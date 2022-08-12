import React from "react";
import styled from "styled-components";



const Fase3 = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        border-color: orange;
        border-radius: 5px;
    }

`

function Etapa3 () {
    return (
        <Fase3>
            <h1> Etapa 3: Informaçôes sobre quem não se formou no ensino superior e nem está cursando.</h1>
            <form>
                <p>5.Por que você não terminou um curso de graduação?</p>
                <input type='text' placeholder='Insira um motivo.'></input>
                <p>6. você fez algum curso complementar?</p>
                <select name="select">
                    <option value='Curso técnico'>Curso técnico</option>
                    <option value='Curso de inglês'>Curso de inglês</option>
                    <option value='Não fiz curso complementar'>Não fiz curso complementar</option>
                </select>
            </form>    
        </Fase3>    
        
    )
}


export default Etapa3;