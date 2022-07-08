import styled from "styled-components";


export const Side  = styled.aside `
    display: flex;
    width: 10vw;
    height: 95vh;
    background-color: orange;

    


`
export const Container = styled.div `
    display: flex;
    justify-content: space-between;
`

export const Content = styled.div `
    background-color:  beige;
    width: 80vw;
    height: 95vh;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    form {
        display:flex;

        width: 100%;
    }
    .Nome {
        
        width: 20%;
        height: 35px;
    }
    .Mensagem {
        
        width: 70%;
        height: 35px; 
    }
    .Button {
        flex-grow: 1;
        height: 40px;
    }

`