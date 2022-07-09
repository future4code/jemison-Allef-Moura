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
        padding: 3px;
        width: 100%;
    }
    .Nome {
        padding-left: 5px;
        width: 18%;
        height: 35px;
        margin-right: 4px;
    }
    .Mensagem {
        padding-left: 5px;
        width: 70%;
        height: 35px; 
        margin-right: 4px;
    }
    .Button {
        flex-grow: 1;
        height: 40px;
        border-radius: 33px 33px 33px 33px;
        cursor: pointer;
        border: none;
        
    }
    input {
        border-radius: 10px 10px 10px 10px;
        border: none;
    }
    .Button:hover {
        background-color: grey;
        
    }
    input:hover {
      
        
    }
`