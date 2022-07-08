import React, { useState } from 'react';
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
  const [inputUsuario, setInputUsuario]=useState("")
  const [inputFotoUsuario, setInputFotoUsuario]=useState("")
  const [inputFotoPublicacao, setInputPublicacao]=useState("")
  const [listaDePost, setListaDePost]=useState([
    {nomeUsuario:"Paulinha", fotoUsuario:"https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/150"},
    {nomeUsuario:"Picachu", fotoUsuario:pika, fotoPost: trov,},
    {nomeUsuario:"Bulbassaur", fotoUsuario:bulb, fotoPost: grass,}
  ])

  // eventos
  const handleInputUsuario = (evento) =>{
    setInputUsuario(evento.target.value)
  }

  const handleInputFotoUsuario = (evento) =>{
    setInputFotoUsuario(evento.target.value)
  }

  const handleInputFotoPublicacao= (evento) =>{
    setInputPublicacao(evento.target.value)
  }

  // adicionar o item
  const adicionarPublicacao=(evento) =>{
    evento.preventDefault();

    const novaPublicacao= {nomeUsuario: inputUsuario, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPublicacao}
    const novaPublicacaoPostada = [novaPublicacao, ... listaDePost]
    setListaDePost(novaPublicacaoPostada)
  }

  let postRenderizado= listaDePost.map((post, index)=>(
    <Post key={index}
    nomeUsuario={post.nomeUsuario}
    fotoUsuario={post.fotoUsuario}
    fotoPost={post.fotoPost}
    />
  ))
  
  
return(
  <MainContainer>
         <form>
        <input placeholder='Usuário'
        value={inputUsuario}
        onChange={handleInputUsuario}/>

        <input placeholder='Link da foto do usuário'
        value={inputFotoUsuario}
        onChange={handleInputFotoUsuario} />

        <input placeholder='Link da imagem a ser publicada'
        value={inputFotoPublicacao}
        onChange={handleInputFotoPublicacao} />
        </form>
      
      <button onClick={adicionarPublicacao}>Publicar</button>
          {postRenderizado}
          
  </MainContainer>
  
       
)

}


export default App;

