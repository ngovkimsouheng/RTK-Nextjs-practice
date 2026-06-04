import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      const incrementValue = action.payload ?? 1;
      state.value += incrementValue;
    },

    decrement: (state, action) => {
      const decrementValue = action.payload ?? 1;
      state.value -= decrementValue;
    },

    resetValue: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetValue } = countSlice.actions;

export default countSlice.reducer;