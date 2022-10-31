import React, { useEffect, useState } from 'react';
import meses from '../../../public/Meses.json';
import años from '../../../public/Años.json';

const SeleccionarFecha = ({
  infoFechaRecerva, 
  objetoApi, 
  selecionAñoRegreso2, 
  selecionAñoSalida2
}) => {
  // estados para la ejecución interna del modal

  const [diasSalida, setDiasSalida] = useState(31);
  const [diasRegreso, setDiasRegreso] = useState(31);
  const [arrDiasSalida, setArrDiasSalida] = useState([]);
  const [arrDiasRegreso, setArrDiasRegreso] = useState([]);
  
  
  // const [añoR, setAñoR] = useState(0);
  // estados que se envían al home
  const [selecionAñoSalida, setSelecionAñoSalida] = useState(0);
  const [selecionAñoRegreso, setSelecionAñoRegreso] = useState(0);
  const [mesElegidoSalida, setMesElegidoSalida] = useState("");
  const [mesElegidoRegreso, setMesElegidoRegreso] = useState("");
  const [diaSalida, setDiaSalida] = useState(0);
  const [diaRegreso, setDiaRegreso] = useState(0);

  // console.log(selecionAñoRegreso)
  useEffect(() => {
    const arrFechaSalida = objetoApi?.fechaSalida.split("/");
    const arrFechaRegreso = objetoApi?.fechaLlegada.split("/");
    const diaSalida = Number(arrFechaSalida?.[0]);
    const diaRegreso = Number(arrFechaRegreso?.[0]);
    const mesSalida = arrFechaSalida?.[1];
    const mesRegreso = arrFechaRegreso?.[1];
    const añoSalida = Number(arrFechaSalida?.[2]);
    const añoRegreso = Number(arrFechaRegreso?.[2]);
    setDiaSalida(diaSalida);
    setDiaRegreso(diaRegreso);
    setMesElegidoSalida(mesSalida);
    setMesElegidoRegreso(mesRegreso);
    setSelecionAñoSalida(añoSalida);
    setSelecionAñoRegreso(añoRegreso);
 }, []);

  useEffect(() => {
    const mesElegidoSalida1 = mesElegidoSalida?.toLowerCase()
    if(mesElegidoSalida1 === "febrero"){
      setDiasSalida(28);
    }else if(
      mesElegidoSalida1 !== "febrero" &&
      mesElegidoSalida1 === "abril" 
      || mesElegidoSalida1 === "junio" 
      || mesElegidoSalida1 === "septiembre" 
      || mesElegidoSalida1 === "nobiembre" 
    ) {
      setDiasSalida(30);
    }else{
      setDiasSalida(31);
    };
  }, [mesElegidoSalida])

  useEffect(() => {
    const mesElegidoRegreso1 = mesElegidoRegreso?.toLowerCase()
    if(mesElegidoRegreso1 === "febrero"){
      setDiasRegreso(28);
    }else if(
      mesElegidoRegreso1 !== "febrero" &&
      mesElegidoRegreso1 === "abril" 
      || mesElegidoRegreso1 === "junio" 
      || mesElegidoRegreso1 === "septiembre" 
      || mesElegidoRegreso1 === "nobiembre" 
    ) {
      setDiasRegreso(30);
    }else{
      setDiasRegreso(31);
    };
  }, [mesElegidoRegreso])

  useEffect(() => {
    const arrNubers = []  ;
    for(let i = 1; i <= diasSalida; i++){
      arrNubers.push(i)
    }
    setArrDiasSalida(arrNubers)
  }, [setArrDiasSalida, diasSalida])

  useEffect(() => {
    const arrNubers = [];
    for(let i = 1; i <= diasRegreso; i++){
      arrNubers.push(i)
    }
    setArrDiasRegreso(arrNubers)
  }, [setArrDiasRegreso, diasRegreso])

  return (
    <div className='seleccionarFecha'>
      <div className='seleccionarFecha__card'>
        <div className='seleccionarFecha__card--text'>
          <h2>Selecionar tus fechas</h2>
          {/* <button>Cerrar</button> */}
          <hr />
        </div>
        <div className='seleccionarFecha__card--fechas'>
          <div className='seleccionarFecha__salida-regreso'> 
            <h3>Fecha de salida</h3>
            <div>
              <select name="año" id="año" value={selecionAñoSalida} onChange={e => setSelecionAñoSalida(e.target.value)}>
                <option value="">Elegir año</option>
                {
                  años.map(año => (
                    <option key={año} value={`${año}`}>{año}</option>
                  ))
                }
              </select>
              <select name="mes" id="mes" value={mesElegidoSalida} onChange={e => setMesElegidoSalida(e.target.value)}>
                <option value="">Elegir mes</option>
                {
                  meses.map(mes => (
                    <option key={mes} value={`${mes}`}>{mes}</option>
                  ))
                }
              </select>
              <select name="dia" id="dia" value={diaSalida} onChange={e => setDiaSalida(e.target.value)}>
                <option value="">Elegir dia</option>
                {
                  arrDiasSalida.map(dia => (
                    <option key={dia} value={`${dia}`}>{dia}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className='seleccionarFecha__salida-regreso'> 
            <h3>Fecha de Regreso</h3>
            <div>
              <select name="año" id="año" value={selecionAñoRegreso} onChange={e => setSelecionAñoRegreso(e.target.value)}>
                <option value="">Elegir año</option>
                {
                  años.map(año => (
                    <option key={año} value={`${año}`}>{año}</option>
                  ))
                }
              </select>
              <select name="mes" id="mes" value={mesElegidoRegreso} onChange={e => setMesElegidoRegreso(e.target.value)}>
                <option value="">Elegir mes</option>
                {
                  meses.map(mes => (
                    <option key={mes} value={`${mes}`}>{mes}</option>
                  ))
                }
              </select>
              <select name="dia" id="dia" value={diaRegreso} onChange={e => setDiaRegreso(e.target.value)}>
                <option value="">Elegir dia</option>
                {
                  arrDiasRegreso.map(dia => (
                    <option key={dia} value={`${dia}`}>{dia}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
        <div className='seleccionarFecha__card--info'>
          <p><b>$</b> Precios bajos</p>
          <button 
            onClick={() => infoFechaRecerva(
              selecionAñoSalida,
              selecionAñoRegreso,
              mesElegidoSalida,
              mesElegidoRegreso,
              diaSalida,
              diaRegreso
            )}
          >Hecho</button>
        </div>
      </div>
    </div>
 
  )
}
 
export default SeleccionarFecha;