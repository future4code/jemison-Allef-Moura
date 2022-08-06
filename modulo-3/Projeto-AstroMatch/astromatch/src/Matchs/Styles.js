import styled from "styled-components";


export const CardContainer = styled.div `

    background-color: #f2f2f2;
    padding: 10px;
    margin: 10px;
    text-align: center;
    color: solid black;
    width: 660px;
    border-radius: 5px;
    
    img {
       
        max-width: 400px;
        max-height: 400px;
       
    }

    h2 {
        color: grey;
        font-family: 'Rajdhani';
    }
    h3 {
        color: purple;
        
    }

    p{
        font-size: 24px;
        font-family: 'Gurajada';
    }

    .btn  {
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: 2px solid #e74c3c;
        border-radius: 0.6em;
        color: #e74c3c;
        cursor: pointer;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1;
        margin: 5px;
        padding: 0.7em 1.0em;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .btn:hover, .btn:focus {
        color: grey;
        outline: 0;
}

    .first1 {
        border-color: #DE0904;
        color: #fff;
        box-shadow: 0 0 40px 40px #DE0904 inset, 0 0 0 0 #DE0904;
        -webkit-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
        
    }

    .first1:hover {
        box-shadow: 0 0 10px 0 #DE0904 inset, 0 0 10px 4px #DE0904;
    }

    .first {
        border-color: #00F52C;
        color: #fff;
        box-shadow: 0 0 40px 40px #00F52C inset, 0 0 0 0 #00F52C;
        -webkit-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
        
    }

    .first:hover {
        box-shadow: 0 0 10px 0 #00F52C inset, 0 0 10px 4px #00F52C;
    }
`

export const DivPai = styled.div `
    display: flex;
    justify-content: center;

    .btt {
    color: #fff;
    cursor: pointer;
    // display: block;
    font-size:10px;
    
    
    margin: 0 0 2em;
    max-width: 100px; 
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%; 
    
    //   @media(min-width: 400px) {
    //     display: inline-block;
    //     margin-right: 2.5em;
    
    //     &:nth-of-type(even) {
    //       margin-right: 0;
    //     }
    //   }
  
    @media(min-width: 600px) {
        
        margin: 0 1em 2em;
    
    //     &:nth-of-type(even) {
    //       margin-right: 2.5em;
    //     }
        
    //     &:nth-of-type(5) {
    //       margin-right: 0;
    //     }
        
    }
    
        &:hover { text-decoration: none; }
    
        }

        .dell {
    background: darken($red, 1.5%);
    font-weight: 100;
        }

    .dell1 {
    background: darken($green, 1.5%);
    font-weight: 100;
    }
    svg {
        height: 45px;
        left: 0;
        position: absolute;
        top: 0; 
        width: 100%; 
    }
    
    rect {
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        stroke-dasharray: 422, 0;
        transition: all 0.35s linear;
    
    }

    .dell:hover {
    background: red;
    font-weight: 900;
    letter-spacing: 1px;
    }

    .dell1:hover {
    background: green;
    font-weight: 900;
    letter-spacing: 1px;
    }
    
    rect {
        stroke-width: 5;
        stroke-dasharray: 15, 310;
        stroke-dashoffset: 48;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
    



    `

    export const Div = styled.div `
        width: 100px;
        height: 100px;

    `

    export const DivMatch = styled.div `
        display: block;
        width: 100px;
        height: 200px;
    `