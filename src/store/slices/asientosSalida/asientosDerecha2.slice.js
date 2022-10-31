import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerecha2Slice = createSlice({
  name: 'asientosDerecha2',
  initialState: [],
  reducers: {
    setAsientosDerecha2: (state, actions) => {
      // const valorInicial = [];
      const validator = state.includes(actions.payload);
      const leng = actions.payload?.length;
      
      if (leng === undefined) {
        if (!validator){
          state.push(actions.payload);
        }
        else{
          // const validatorArrayApi = valorInicial.includes(actions.payload);
          // console.log(validatorArrayApi);
          // if(!validatorArrayApi){
            const index = state.findIndex(e => e === actions.payload);
            state.splice(index, 1);
          // }else{

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
  
export const getArrayNumerosSalidaDerecha2Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerecha2(res.data.asientosSalidaDerecha2))
  });
}


export const { setAsientosDerecha2 } = asientosDerecha2Slice.actions;
export default asientosDerecha2Slice.reducer;