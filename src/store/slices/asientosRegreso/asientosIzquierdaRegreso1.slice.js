import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosIzquierdaRegreso1Slice = createSlice({
  name: 'asientosIzquierdaRegreso1',
  initialState: [],
  reducers: {
    setAsientosIzquierdaRegreso1: (state, actions) => {
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
 
export const getArrayNumerosRegresoIzquierda1Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosIzquierdaRegreso1(res.data.asientosRegresoIzquierda1))
  });
}

export const { setAsientosIzquierdaRegreso1 } = asientosIzquierdaRegreso1Slice.actions;
export default asientosIzquierdaRegreso1Slice.reducer;