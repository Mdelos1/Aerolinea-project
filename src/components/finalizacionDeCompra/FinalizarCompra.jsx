import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import letrasRandom from '../../../public/letrasRandom.json';
import nombres from '../../../public/nombres.json';

const FinalizarCompra = () => {
  const apiInfoVuelos = "https://aerolineajsonserver-production.up.railway.app/vuelos";
  const navigate = useNavigate();

  const [objetoApiVulos, setObjetoApiVuelos] = useState({});
  const [randomReserva, setRandomReserva] = useState(0)
  const [randomCodigo, setRandomCodigo] = useState(0)
  const [randomLetra, setRandomLetra] = useState(0)
  useEffect(() => {
    axios.get(apiInfoVuelos)
    .then(res => {
      setObjetoApiVuelos(res.data);
      console.log(res.data)
    })
    const numRandom = Math.floor(Math.random()*10000);
    const num2Random = Math.floor(Math.random()*100);
    const num3Random = Math.floor(Math.random()*6);
    setRandomReserva(numRandom);
    setRandomCodigo(num2Random);
    setRandomLetra(num3Random)
  },[]);

  const trueAdultos = objetoApiVulos.totalPersonas?.adultos
  const trueNiños = objetoApiVulos.totalPersonas?.niños
  const trueBebes = objetoApiVulos.totalPersonas?.bebes

  const [arregloAdultos, setArregloAdultos] = useState([])
  const [arregloNiños, setArregloNiños] = useState([])
  const [arregloBebes, setArregloBebes] = useState([])

  useEffect(() => {
    const numArregloAdultos = []
    const numArregloNiños = []
    const numArregloBebes = []
    for (let i = 1; i <= trueAdultos; i++) {
      numArregloAdultos.push(i)
    }
    for (let i = 1; i <= trueNiños; i++) {
      numArregloNiños.push(i)
    }
    for (let i = 1; i <= trueBebes; i++) {
      numArregloBebes.push(i)
    }
    setArregloAdultos(numArregloAdultos)
    setArregloNiños(numArregloNiños)
    setArregloBebes(numArregloBebes)
  },[trueAdultos])
  // console.log(trueAdultos) 

  const finalizarCompra = () => {
    // navigate("/");
    navigate(-1);
  };

  return (
    <div className='finalizarCompra'>
      <div className='finalizarCompra__container'>
      {
        trueAdultos ?
        arregloAdultos.map(e => (
          <div key={e} className='finalizarCompra__card adultos__card'>
            <div className='infoReserva'>
              <p>Código de Vuelo: <b>{letrasRandom[randomLetra+1]}{randomCodigo*e}</b></p>
              <p>Número de Reserva: <b>{randomReserva*e/1}</b></p>
            </div>
            <div>
              <div className='nombre'>
                <p>Tikete a nombre de: <b>{nombres[e]}</b></p>
                <p>Adulto: <b>$450</b></p>
              </div>
              <div className='paisOrigen'>
                <p>Pais de Orige: {objetoApiVulos.paisOrigen}<b></b></p>
                <p>Fecha de salida: {objetoApiVulos.fechaSalida}</p>
              </div>
              <div className='paisDestino'>
                <p>Pais de Destino: {objetoApiVulos.paisDestino}<b></b></p>
                <p>Fecha de llegada: {objetoApiVulos.fechaLlegada}</p>
              </div>
            </div>
          </div> 
        )) : ""
        
      }
      {
        trueNiños ?
        arregloNiños.map(e => (
          <div className='finalizarCompra__card niños__card'>
            <div className='infoReserva'>
              <p>Código de Vuelo: <b>{letrasRandom[randomLetra+1]}{randomCodigo*e}</b></p>
              <p>Número de Reserva: <b>{randomReserva*e/1}</b></p>
            </div>
            <div>
              <div className='nombre'>
                <p>Tikete a nombre de: <b>{nombres[e+10]}</b></p>
                <p>Niño: <b>$350</b></p>
              </div>
              <div className='paisOrigen'>
                <p>Pais de Orige: {objetoApiVulos.paisOrigen}<b></b></p>
                <p>Fecha de salida: {objetoApiVulos.fechaSalida}</p>
              </div>
              <div className='paisDestino'>
                <p>Pais de Destino: {objetoApiVulos.paisDestino}<b></b></p>
                <p>Fecha de llegada: {objetoApiVulos.fechaLlegada}</p>
              </div>
            </div>
          </div> 
        )) : ""
      }
      {
        trueBebes ?
        arregloBebes.map(e => (
          <div className='finalizarCompra__card bebes__card'>
            <div className='infoReserva'>
              <p>Código de Vuelo: <b>{letrasRandom[randomLetra-1]}{randomCodigo*e}</b></p>
              <p>Número de Reserva: <b>{randomReserva*e/1}</b></p>
            </div>
            <div>
            <div className='nombre'>
                <p>Tikete a nombre de: <b>{nombres[e+20]}</b></p>
                <p>Bebe: <b>$250</b></p>
              </div>
              <div className='paisOrigen'>
                <p>Pais de Orige: {objetoApiVulos.paisOrigen}<b></b></p>
                <p>Fecha de salida: {objetoApiVulos.fechaSalida}</p>
              </div>
              <div className='paisDestino'>
                <p>Pais de Destino: {objetoApiVulos.paisDestino}<b></b></p>
                <p>Fecha de llegada: {objetoApiVulos.fechaLlegada}</p>
              </div>
            </div>
          </div> 
        )) : ""
      }
      <button className='btn__finalizarCompra' onClick={() => finalizarCompra()}>Ir atras</button>
      </div>

    </div>
  )
}

export default FinalizarCompra;
