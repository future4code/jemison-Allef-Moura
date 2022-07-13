import styled from "styled-components";
import React from "react";



 export const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-top: 10px;
    }

`







// import React, { useState } from "react";
// import Etapa1 from "./Etapa1";
// import Etapa2 from "./Etapa2";
// import Etapa3 from "./Etapa3";
// import Etapa4 from "./Etapa4";


// function SeletorPaginas () {
    
//     const [nav,setNav] = useState ("")
//     const handleEtapa1 = () => {
//         setNav('etapa1')

//     }
//     const handleEtapa2 = () => {
//         setNav('etapa2')

//     }
//     const handleEtapa3 = () => {
//         setNav('etapa3')

//     }
//     const handleEtapa4 = () => {
//         setNav('etapa4')

//     }
//     const navigation = () =>{
//         switch(nav){
//             case 'etapa1':
//                 return <Etapa1/>
//                 break;
//             case 'etapa2':
//                 return <Etapa2/>
//                 break;
//             case 'etapa3':
//                 return <Etapa3/>
//                 break;
//             case 'etapa4':
//                 return <Etapa4/>
//                 break;
//             default:
//                 break;
//         }
//     }
//     return (
//         <section>
//             <h1>Home</h1>
//             <button onClick={handleEtapa1}>Proxima etapa</button>
//             <button onClick={handleEtapa2}>Proxima etapa</button>
//             <button onClick={handleEtapa3}>Proxima etapa</button>
//             <button onClick={handleEtapa4}>Proxima etapa</button>
//             {navigation()}
//             </section>
      
//     )
    
        
    
// }
// export default SeletorPaginas;
