
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyled";
import Router from "./components/router"


function App() {
  return (
    <Section>
      <GlobalStyle/>
      <Router/>
    </Section>
  );
}

export default App;




const Section = styled.section`
  height: 90vh;

`
