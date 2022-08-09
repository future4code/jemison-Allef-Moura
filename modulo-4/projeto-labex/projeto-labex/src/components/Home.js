import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <div>
      <Header>
        <button>Sing in User </button>
        <button>Sing in Adm</button>
      </Header>
      <Div>
        <H1>LABEX ROAD TRIP </H1>
      </Div>
    </div>
  )
}

export default Home


const Header = styled.header `
    display: flex;
    justify-content: flex-end;
`
const Div = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`
const H1 = styled.h1 `
  font-family: 'Aboreto', sans-serif;

`
