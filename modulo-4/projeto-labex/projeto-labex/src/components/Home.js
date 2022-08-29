import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate('/Trips')
  }

  const goToAdm = () => {
    navigate('/Login')
  }


  return (
    <>
      <Header>
        <Button onClick={goToUser}>TRAVEL LIST </Button>
        <Button onClick={goToAdm}>SING IN ADM</Button>
      </Header>
      <Div>
        <H1>LABEX TRAVEL </H1>
        <Text2>Aonde você quiser ir, é onde te levamos!</Text2>
      </Div>
    </>
  )
}

export default Home

// ----Header Styled
const Header = styled.header `
    display: flex;
    justify-content: flex-end;
    background-color: #011640;
    height: 10vh;
    align-items: center;

`
//----Button styled
const Button = styled.button `
  cursor: pointer;
  margin: 0 10px 0 5px;
  height: 30px;
  padding: 0 6px 0 6px;
  border-radius: 33px 33px 33px 33px;
  color: white;
  background-color: black;
  font-family: 'Jolly Lodger', cursive;
  font-size: 20px;
  border: none;


  :hover{
    
    color: black;
    background-color:#8bcf21 ;
    box-shadow: 3px 0 3px 3px #8bcf21 ;
    
  }
`
//----Main Styled
const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #010f2b;
`
//---Title Styled
const H1 = styled.h1 `
  font-family: 'Jolly Lodger';
  font-size: 80px;
  color: #8bcf21;

`
//---- SubTitle Styled
const Text2 = styled.p `
  
  font-family:'Alumni Sans Pinstripe', cursive ;
  font-weight: 600;
  color: #ffcb16;
  font-size: 25px;
  

`