import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EndPage from '../pages/EndPage';
import Home from '../pages/Home';

const Routers = () =>{
    return  <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/endpage' element={<EndPage/>}/>
        </Routes>
    </BrowserRouter>
     
}
    export default Routers;