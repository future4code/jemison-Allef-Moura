import React from 'react'
import { CardContainer } from './styled'

function Card(props) {
  const {img, name, species} = props
  return (
    <CardContainer>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{species}</p>
    </CardContainer>
  )
}

export default Card