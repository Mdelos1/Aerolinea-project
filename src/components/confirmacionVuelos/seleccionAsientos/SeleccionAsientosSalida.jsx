import React from 'react'
import { useNavigate } from 'react-router-dom';
import AsientosSalida from './AsientosSalida';
 
const SeleccionAsientosSalida = () => {
  // const navigate = useNavigate()

  return (
    <div className='SeleccionAsientosSalida'>
      <div className="title_vuelo">
          <h1 className="title_salida">Vuelo de salida</h1>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">Martes 30 noviembre 2021</p>
          <p className="title_paisVuelo">Colombia a Brasil</p>
          <p className="title_horariosVuelo">
            Seleccion de asientos
          </p>
        </div>
        <AsientosSalida />
    </div>
 
  )
}
 
export default SeleccionAsientosSalida;