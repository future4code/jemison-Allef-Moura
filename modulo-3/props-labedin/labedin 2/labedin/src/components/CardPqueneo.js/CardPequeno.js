import React from "react"; 
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div className="smallcard-container">
            <h4>{ props.email}</h4>
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
        
    )

}  

export default CardPequeno;