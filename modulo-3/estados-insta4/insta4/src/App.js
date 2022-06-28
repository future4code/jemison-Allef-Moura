import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import bulb from './img/pokemon-bulbasaur-i.jpg'
import grass from './img/gras.webp'
import pika from './img/pikachu.jpg'
import trov from './img/trovoada.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'Picachu'}
            fotoUsuario={pika}
            fotoPost={trov}
          />
          <Post
            nomeUsuario={'Bulbassaur'}
            fotoUsuario={bulb}
            fotoPost={grass}
          />
  </MainContainer>
  
       
)

}


export default App;

