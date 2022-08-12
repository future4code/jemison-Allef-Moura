import { Container, Content, Side } from "./styles"
 

const Main = () => {
    return (
        <Container>
            <Side/>
                <Content>
                    <form>
                        
                            <input className="Nome" type='text' placeholder="Nome"></input>
                        
                            <input className="Mensagem" type='text' placeholder="Mensagem"></input>
                        
                            <button className="Button" type="submit">Enviar</button>
                    </form>
        
                </Content> 
            <Side/>
        </Container>
    )
}    

export default Main
            
                    

