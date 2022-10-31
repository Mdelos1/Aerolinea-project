import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PaginaVuelos from "./components/Paginavuelos";
import ConfirmacionVuelos from "./components/confirmacionVuelos/ConfirmacionVuelos";
import FinalizarCompra from "./components/finalizacionDeCompra/FinalizarCompra";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaVuelos />}/>
          <Route path="/confirmacion_vuelos" element={<ConfirmacionVuelos />}/>
          <Route path="/confirmacion_vuelos/finalizar_compra" element={<FinalizarCompra />}/>
        </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
