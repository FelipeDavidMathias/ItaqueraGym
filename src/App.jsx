import { BrowserRouter, Routes, Route } from "react-router-dom"

import Menu from "./pages/Menu"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Home from "./pages/Home"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />}></Route>
          <Route path="/sobre" element={< Sobre />}></Route>
          <Route path="/contato" element={< Contato />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App
