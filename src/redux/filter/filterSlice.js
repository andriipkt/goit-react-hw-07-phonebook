import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilterSlice: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFilterSlice } = filterSlice.actions;
export const reducerFilterSlice = filterSlice.reducer;
