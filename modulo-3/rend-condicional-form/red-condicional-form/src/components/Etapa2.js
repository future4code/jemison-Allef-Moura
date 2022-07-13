import React from "react";
import styled from "styled-components";



const Fase2 = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        border-color: orange;
        border-radius: 5px;
    }

`

function Etapa2 () {
    return(
        <Fase2>
            <h1>Etapa 2: Informaçôes de Ensino Superior </h1>
            <form>
                <p>5. Qual curso?</p>
                <input type='text' placeholder="Nome do curso."></input>
                <p>6. Qual a unidade de Ensino?</p>
                <input type='text' placeholder='Insira unidade de ensino.'></input>
            </form>
        </Fase2>

    )
}

export default Etapa2;