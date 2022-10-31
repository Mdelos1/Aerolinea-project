import axios from 'axios';

const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

import { createSlice } from '@reduxjs/toolkit';

export const asientosIzquierda1Slice = createSlice({
  name: 'asientosIzquierda1',
  initialState: [],
  reducers: {
    setAsientosIzquierda1: (state, actions) => {
      const validator = state.includes(actions.payload);
      const leng = actions.payload?.length;
      
      if (leng === undefined) {
        if (!validator){
          state.push(actions.payload);
        }else{
          const index = state.findIndex(e => e === actions.payload);
          state.splice(index, 1);
          // const validatorArrayApi = valorInicial.includes(actions.payload);
          // console.log(validatorArrayApi);
          // if(!validatorArrayApi){
          // }
        }
      }else{
        state = actions.payload;
      }
      // console.log(valorInicial);
      return state;
    } 
  }
})


export const getArrayNumerosSalidaIzquierda1Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosIzquierda1(res.data.asientosSalidaIzquierda1))
  });
}

export const { setAsientosIzquierda1 } = asientosIzquierda1Slice.actions;
export default asientosIzquierda1Slice.reducer;