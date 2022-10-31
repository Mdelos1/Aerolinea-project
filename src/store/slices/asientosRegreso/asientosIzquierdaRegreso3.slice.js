import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosIzquierdaRegreso3Slice = createSlice({
  name: 'asientosIzquierdaRegreso3',
  initialState: [],
  reducers: {
    setAsientosIzquierdaRegreso3: (state, actions) => {
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
  
export const getArrayNumerosRegresoIzquierda3Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosIzquierdaRegreso3(res.data.asientosRegresoIzquierda3))
  });
}

export const { setAsientosIzquierdaRegreso3 } = asientosIzquierdaRegreso3Slice.actions;
export default asientosIzquierdaRegreso3Slice.reducer;