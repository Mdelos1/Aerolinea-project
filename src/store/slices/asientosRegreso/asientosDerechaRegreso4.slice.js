import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerechaRegreso4Slice = createSlice({
  name: 'asientosDerechaRegreso4',
  initialState: [],
  reducers: {
    setAsientosDerechaRegreso4: (state, actions) => {
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

export const getArrayNumerosRegresoDerecha4Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerechaRegreso4(res.data.asientosRegresoDerecha4))
  });
}

export const { setAsientosDerechaRegreso4 } = asientosDerechaRegreso4Slice.actions;
export default asientosDerechaRegreso4Slice.reducer;