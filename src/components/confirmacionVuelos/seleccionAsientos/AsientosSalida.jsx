import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAsientosIzquierda1 } from '../../../store/slices/asientosSalida/asientosIzquierda1.slice'; 
import { setAsientosDerecha2 } from '../../../store/slices/asientosSalida/asientosDerecha2.slice';
import { setAsientosIzquierda3 } from '../../../store/slices/asientosSalida/asientosIzquierda3.slice';
import { setAsientosDerecha4 } from '../../../store/slices/asientosSalida/asientosDerecha4.slice';


const AsientosSalida = () => {

  const dispatch = useDispatch();
  
  const letras = ["A", "B", "C", "", "D", "E", "F"];
// const k = [2,5]
  const noDisponibleSalidaRapidaIzquierda = useSelector(state => state.asientosIzquierda1);
  const noDisponibleSalidaRapidaDerecha = useSelector(state => state.asientosDerecha2);
  const noDisponibleEstandarIzquierda = useSelector(state => state.asientosIzquierda3);
  const noDisponibleEstandarDerecha = useSelector(state => state.asientosDerecha4);

  const [botones, setBotones] = useState([])
  const [botonesNumber, setBotonesNumber] = useState([])
  const [botonesNumber1, setBotonesNumber1] = useState([])

  const [noDisponible1, setNoDiponible1] = useState([]) 
  const [noDisponible2, setNoDiponible2] = useState([]) 
  const [noDisponible3, setNoDiponible3] = useState([]) 
  const [noDisponible4, setNoDiponible4] = useState([]) 



  useEffect(() => {
    let arrvacio = []
    let arrNumbers = []
    let arrNumbers1 = []
    for (let i = 1; i <= 15; i++){
      arrvacio.push("");
    }
    for (let i = 1; i <= 5; i++){
      arrNumbers.push(i);
    }
    for (let i = 6; i <= 10; i++){
      arrNumbers1.push(i);
    }
    setBotones(arrvacio)
    setBotonesNumber(arrNumbers)
    setBotonesNumber1(arrNumbers1)
  }, [
    noDisponibleSalidaRapidaIzquierda,
    noDisponibleSalidaRapidaDerecha,
    noDisponibleEstandarIzquierda,
    noDisponibleEstandarDerecha
  ])

  useEffect(() => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    botones.map((e, i) => {
      const ar1 = noDisponibleSalidaRapidaIzquierda.find(e => e === i+1)
      arr1.push(ar1 || 0)
    })
    botones.map((e, i) => {
      const ar2 = noDisponibleSalidaRapidaDerecha.find(e => e === i+1)
      arr2.push(ar2 || 0)
    })
    botones.map((e, i) => {
      const ar3 = noDisponibleEstandarIzquierda.find(e => e === i+1)
      arr3.push(ar3 || 0)
    })
    botones.map((e, i) => {
      const ar4 = noDisponibleEstandarDerecha.find(e => e === i+1)
      arr4.push(ar4 || 0)
    })
    setNoDiponible1(arr1)
    setNoDiponible2(arr2)
    setNoDiponible3(arr3)
    setNoDiponible4(arr4)
  }, [botones])



  return (
    <div className='AsientosSalida'>
      <div id='asientosLetras'>
        {
          letras.map(letra => (
            <button className='botonesLetras' key={letra}>{letra}</button>
          ))
        }
      </div>

      <p>Salida Rápida</p>
      <div className='asientosBotones'>
        <div className='botonesSalidaRapida'>
          {
            botones?.map((boton, index) => (
              <button 
                onClick={() => dispatch(setAsientosIzquierda1(index+1))}
                style={{
                  cursor: noDisponible1?.[index] === 0 && "pointer", 
                }}
                className={`salidaRapida `} 
                id={noDisponible1?.[index] !== 0 ? "noDisponible" : ""}
                key={boton}>{boton}
              </button>
            ))
          }
        </div>
        <div className='botones___container'>
          {
            botonesNumber.map(number => (
              <button className='botones___container--number' key={number}>{number}</button>
            ))
          }
        </div>
        <div className='botonesSalidaRapida'>
        {
          botones.map((boton, index) => (
            <button 
              onClick={() => dispatch(setAsientosDerecha2(index+1))}
              style={{cursor: noDisponible2[index] === 0 && "pointer"}}
              className='salidaRapida'  
              id={noDisponible2[index] !== 0 ? "noDisponible" : ""}
              key={boton}>{boton}
            </button>
          ))
        }
        </div>
      </div>
      <p>Estandar</p>
      <div className='asientosBotones'>
        <div className='botonesSalidaRapida'>
          {
            botones.map((boton, index) => (
              <button 
              onClick={() => dispatch(setAsientosIzquierda3(index+1))}
                style={{cursor: noDisponible3[index] === 0 && "pointer"}}
                className='salidaRapida' 
                id={noDisponible3[index] !== 0 ? "noDisponible" : ""}
                key={boton}>{boton}
              </button>
            ))
          }
        </div>
        <div className='botones___container'>
          {
            botonesNumber1.map(number => (
              <button className='botones___container--number' key={number}>{number}</button>
            ))
          }
        </div>
        <div className='botonesSalidaRapida'>
        {
          botones.map((boton, index) => (
            <button 
            onClick={() => dispatch(setAsientosDerecha4(index+1))}
              style={{cursor: noDisponible4[index] === 0 && "pointer"}}
              className='salidaRapida' 
              id={noDisponible4[index] !== 0 ? "noDisponible" : ""}
              key={boton}>{boton}
            </button>
          ))
        }
        </div>
      </div>
    </div>
 
  )
}
 
export default AsientosSalida;



