import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerechaRegreso2Slice = createSlice({
  name: 'asientosDerechaRegreso2',
  initialState: [],
  reducers: {
    setAsientosDerechaRegreso2: (state, actions) => {
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
      //  valorInicial.push([...actions.payload]);
      }
    //  console.log(valorInicial);
      return state;
    }
  }
})
  
export const getArrayNumerosRegresoDerecha2Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerechaRegreso2(res.data.asientosRegresoDerecha2))
  });
}

export const { setAsientosDerechaRegreso2 } = asientosDerechaRegreso2Slice.actions;
export default asientosDerechaRegreso2Slice.reducer;