
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyled";
import Router from "./components/router"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Section>
      <GlobalStyle/>
      <Router/>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
/>
    </Section>
  );
}

export default App;




const Section = styled.section`
  height: 90vh;

`
