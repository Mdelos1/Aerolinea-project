import { configureStore } from '@reduxjs/toolkit';
import infoPaisApiSlice from './slices/infoPaisApi.slice';
import valorMaletasSlice from './slices/valorMaletas.slice';
// vuelos salida
import asientosIzquierda1Slice from './slices/asientosSalida/asientosIzquierda1.slice';
import asientosDerecha2Slice from './slices/asientosSalida/asientosDerecha2.slice';
import asientosIzquierda3Slice from './slices/asientosSalida/asientosIzquierda3.slice';
import asientosDerecha4Slice from './slices/asientosSalida/asientosDerecha4.slice';

// vuelos regreso
import asientosIzquierdaRegreso1Slice from './slices/asientosRegreso/asientosIzquierdaRegreso1.slice';
import asientosDerechaRegreso2Slice from './slices/asientosRegreso/asientosDerechaRegreso2.slice';
import asientosIzquierdaRegreso3Slice from './slices/asientosRegreso/asientosIzquierdaRegreso3.slice';
import asientosDerechaRegreso4Slice from './slices/asientosRegreso/asientosDerechaRegreso4.slice';

export default configureStore({
  reducer: {
    infoPaisApi: infoPaisApiSlice,
    valorMaletas: valorMaletasSlice,

    asientosIzquierda1: asientosIzquierda1Slice,
    asientosDerecha2: asientosDerecha2Slice,
    asientosIzquierda3: asientosIzquierda3Slice,
    asientosDerecha4: asientosDerecha4Slice,

    asientosIzquierdaRegreso1: asientosIzquierdaRegreso1Slice,
    asientosDerechaRegreso2: asientosDerechaRegreso2Slice,
    asientosIzquierdaRegreso3: asientosIzquierdaRegreso3Slice,
    asientosDerechaRegreso4: asientosDerechaRegreso4Slice
  }
})