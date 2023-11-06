import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from "./pages/home";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/contato";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/contato" element={<Contato/>}/>
        <Route path = "/cadastro" element={<Cadastro/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    )
}
export default App