import React, { useState } from "react";
import paises from "../../../public/paises.json";


const SelecionarPaisDestino = ({setModalSeleccionPais, modalSeleccionPais, seleccionPais}) => {
  const [infoSeleccion, setInfoSeleccion] = useState("")

  return (
    <div id="seleccionarPais" className="seleccionarPais" >
      <div id="seleccionarPais__card" className="seleccionarPais__card">
        <h3>A donde viajas</h3>
        <select value={infoSeleccion} onChange={(e) => setInfoSeleccion(e.target.value)}>
        <option value={''}>seleccionar pais</option> 
        {
          paises.map(pais => (
              <option value={`${pais}`}>{pais}</option> 
          ) ) 
        }
            </select>
        <button className="btnSeleccion" onClick={() => seleccionPais(infoSeleccion)}> Guardar</button>
        <i className="fa-regular fa-circle-xmark" onClick={() => setModalSeleccionPais(!modalSeleccionPais)}></i>
      </div>
    </div>
  );
};

export default SelecionarPaisDestino;
