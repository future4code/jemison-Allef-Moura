import React, { useState } from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";
import { Div } from "./components/Button";


function App() {
  const [sectionState, setSectionState]= useState(1);

  function viewFirstStep (){
    setSectionState(sectionState +1)
  }

  function render (){
    switch(sectionState){
      case 1:
        return(<Etapa1/>)
        break;
      case 2:
        return(<Etapa2/>)
        break;
      case 3:
        return(<Etapa3/>)
        break;
      case 4:
        return(<Etapa4/>)
        break;
        default:
          break;
    }
  }
  return (
    
   <Div>
    {render()}
    <button onClick={viewFirstStep}>Próxima etapa</button>
   </Div>
    
  );
}

export default App;
