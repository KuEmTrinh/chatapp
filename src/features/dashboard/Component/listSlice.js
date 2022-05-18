import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: "",
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setListDataFirebase: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setListDataFirebase } = listSlice.actions;

export default listSlice.reducer;
