import { createSlice } from '@reduxjs/toolkit';
  
export const infoPaisApiSlice = createSlice({
  name: 'infoPaisApi',
  initialState: "",
  reducers: {
    setMostrarSelccionPais: (state, actions) => {
      if(actions.payload){
        state = actions.payload
      }
      return state
    }
  }
})
  
export const { setMostrarSelccionPais } = infoPaisApiSlice.actions;
export default infoPaisApiSlice.reducer;