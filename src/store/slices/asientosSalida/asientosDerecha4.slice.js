import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerecha4Slice = createSlice({
  name: 'asientosDerecha4',
  initialState: [],
  reducers: {
    setAsientosDerecha4: (state, actions) => {
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

export const getArrayNumerosSalidaDerecha4Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerecha4(res.data.asientosSalidaDerecha4))
  });
}
  

export const { setAsientosDerecha4 } = asientosDerecha4Slice.actions;
export default asientosDerecha4Slice.reducer;