import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosIzquierda3Slice = createSlice({
  name: 'asientosIzquierda3',
  initialState: [],
  reducers: {
    setAsientosIzquierda3: (state, actions) => {
      // const valorInicial = [];
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
        // valorInicial.push([...actions.payload]);
      }
      // console.log(valorInicial);
      return state;
    } 
  }
})

export const getArrayNumerosSalidaIzquierda3Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosIzquierda3(res.data.asientosSalidaIzquierda3))
  });
}

export const { setAsientosIzquierda3 } = asientosIzquierda3Slice.actions;
export default asientosIzquierda3Slice.reducer;