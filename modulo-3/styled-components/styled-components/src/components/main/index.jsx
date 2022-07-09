import React, { useState } from "react"
import { Container, Content, Side } from "./styles"


const [inputNome, setInputNome] = useState('')
const [inputMsg, setInputMsg] = useState('')
const [...chats, setChat] =useState ([''

])
const handleInputNome = (e) => {
  setInputNome(e.target.value)
}

const handleInputMsg = (e) => {
    setInputMsg (e.target.value)
}
const novaMsg = (e) => {
    
    const msg = {nome: inputNome ,mensagem: inputMsg}
    const novaListaMsg[...chats,nMensagem]
    setChat(novaListaMsg)
}


 

const Main = () => {
    return (
        <Container>
            <Side/>
                <Content>
                    <form>
                        
                            <input className="Nome" type='text' placeholder="Nome" onChange={handleInputNome} value></input>
                        
                            <input className="Mensagem" type='text' placeholder="Insira sua mensagem" onChange={handleInputMsg} value></input>
                        
                            <button className="Button" type="submit" onClick={novaMsg}>Enviar</button>
                    </form>
        
                </Content> 
            <Side/>
        </Container>
    )
}    

export default Main
            
                    

