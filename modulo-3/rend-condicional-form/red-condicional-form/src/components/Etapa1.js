import React from "react";
import styled from "styled-components";



const Fase1 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        border-color: orange;
        border-radius: 5px;
    }

`


function Etapa1 (props) {
    

    return (
        <Fase1>
            <h1>Etapa 1: Dados Gerais.</h1>
            <form>
                <p>1. Qual seu Nome?</p>
                <input type='text' placeholder="Insira nome completo"></input>
                <p>2. Qual sua idade?</p>
                <input type='text' placeholder="Insira sua idade"></input>
                <p>3. Qual seu email?</p>
                <input type='text' placeholder="Insira seu email"></input>
                <p>4. Qual sua escolaridade?</p>
                <select name="select">
                    <option value=''></option>
                    <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                    <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                    <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                    <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
                </select>
            </form>
            
        </Fase1>
    )

}

export default Etapa1;