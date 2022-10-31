import React from 'react'
import { useNavigate } from 'react-router-dom';
import AsientosRegreso from './AsientosRegreso';
 
const SeleccionAsientosRegreso = () => {


  return (
    <div className='SeleccionAsientosRegreso'>
      <div className="title_vuelo">
          <h1>Vuelo de regreso</h1>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">Miercoles 8 diciembre 2021</p>
          <p className="title_paisVuelo">Brasil a Colombia</p>
          <p className="title_horariosVuelo">
            Seleccion de horarios y equipajes
          </p>
          <AsientosRegreso />
        </div>
        
    </div>
 
  )
}
 
export default SeleccionAsientosRegreso;