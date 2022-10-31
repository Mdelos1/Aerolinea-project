import React from "react";
import { useDispatch } from 'react-redux';
import { setValorMaletas } from '../../../store/slices/valorMaletas.slice';

const VuelosRegreso = ({objetoApiVulos}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="vuelo_regreso">
        <div className="title_vuelo">
          <h1>Vuelo de regreso</h1>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">{objetoApiVulos?.fechaLlegada}</p>
          <p className="title_paisVuelo">De {objetoApiVulos?.paisDestino} a {objetoApiVulos?.paisOrigen}</p>
          <p className="title_horariosVuelo">
            Seleccion de horarios y equipajes
          </p>
        </div>
        <div className="info_vuelo">
          <p className="number_vuelo">07:28 AM</p>
          <div>
            <p>1h 57min</p>
            <hr />
            <p>Sin escalas</p>
          </div>
          <p className="number_vuelo">10:08 AM</p>
          <div onClick={() => dispatch(setValorMaletas(120.000))} className="maleta1">
            <p>1 objeto personal</p>
            <p>$120.000</p>
          </div>
          <div onClick={() => dispatch(setValorMaletas(240.000))} className="maleta2">
            <p>Equipaje de mano</p>
            <p>$240.000</p>
          </div>
          <div onClick={() => dispatch(setValorMaletas(320.000))} className="maleta3">
            <p>Equipaje 25Kg</p>
            <p>$320.000</p>
          </div>
        </div>
      </div>
    </>
 
  )
}
 
export default VuelosRegreso;