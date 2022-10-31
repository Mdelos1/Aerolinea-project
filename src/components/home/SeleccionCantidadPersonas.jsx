import React, { useState } from 'react'
 

const SeleccionCantidadPersonas = ({totalPersonas, adultos, niños, bebes, objetoApi}) => {

  const [contadorAdultos, setContadorAdultos] = useState(objetoApi?.totalPersonas.adultos || adultos);
  const [contadorNiños, setContadorNiños] = useState(objetoApi?.totalPersonas.niños || niños);
  const [contadorBebes, setContadorBebes] = useState(objetoApi?.totalPersonas.bebes || bebes);

  return (
    <div className='cantidadPersonas'>
      <div className='catidadPersonas__card'>
        <div className='catidadPersonas__card--content'>
          <div>
            <h3>Adultos</h3>
            <p>{"(18+ años)"}</p>
          </div>
          <div className='content__acount'>
            <button onClick={() => setContadorAdultos(contadorAdultos-1)} disabled={contadorAdultos <= 0}>-</button>
            <p>{contadorAdultos }</p>
            <button onClick={() => setContadorAdultos(contadorAdultos+1)} disabled={contadorAdultos >= 10}>+</button>
          </div>
        </div>
        <div className='catidadPersonas__card--content'>
          <div>
            <h3>Niños</h3>
            <p>{"(4-17 años)"}</p>
          </div>
          <div className='content__acount'>
            <button onClick={() => setContadorNiños(contadorNiños-1)} disabled={contadorNiños <= 0}>-</button>
            <p>{contadorNiños}</p>
            <button onClick={() => setContadorNiños(contadorNiños+1)} disabled={contadorNiños >= 10}>+</button>
          </div>
        </div>
        <div className='catidadPersonas__card--content'>
          <div>
            <h3>Bebés</h3>
            <p>{"(0-3 años)"}</p>
          </div>
          <div className='content__acount'>
            <button onClick={() => setContadorBebes(contadorBebes-1)} disabled={contadorBebes <= 0}>-</button>
            <p>{contadorBebes}</p>
            <button onClick={() => setContadorBebes(contadorBebes+1)} disabled={contadorBebes >= 10}>+</button>
          </div>
        </div>
          <button 
            onClick={() => totalPersonas(contadorAdultos, contadorNiños, contadorBebes)} 
            className='catidadPersonas__btn'
          >Listo!
          </button>
      </div>
    </div>
 
  )
}
 
export default SeleccionCantidadPersonas;