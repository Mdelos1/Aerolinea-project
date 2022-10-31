import { createSlice } from '@reduxjs/toolkit';
  
export const valorMaletasSlice = createSlice({
  name: 'valorMaletas',
  initialState: [0],
  reducers: {
    setValorMaletas: (state, actions) => {
      state.push(actions.payload)
      return state
    }
  }
})
  
export const { setValorMaletas } = valorMaletasSlice.actions;
export default valorMaletasSlice.reducer;
