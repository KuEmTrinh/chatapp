import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../app/firebase";

const initialState = {
  list: "",
};

export const getListData = createAsyncThunk("get/getListData", async () => {
  const promise = await db.collection("list").onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.docs.map((doc) => {
      data.push({
        id: doc.id,
        message: doc.data().message,
        name: doc.data().name,
        status: doc.data().status,
      });
    });
  });
  return promise;
});

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    // addPost: (state, action) => {
    //   // C1:
    //   // state.push({
    //   //   postTitle: action.payload,
    //   //   postId: nanoid(),
    //   // });
    //   // C2
    //   let cloneState = JSON.parse(JSON.stringify(state));
    //   return [
    //     ...cloneState,
    //     { postTitle: action.payload, postId: nanoid(), price: 10 },
    //   ];
    // },
    // sortPost: (state, action) => {
    //   let cloneState = [...state];
    //   cloneState.sort((a, b) => a.price - b.price);
    //   return cloneState;
    // },
  },

  extraReducers(builder) {
    builder
      // getlist todo
      .addCase(getListData.pending, (state, action) => {})
      .addCase(getListData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getListData.rejected, (state, action) => {});
  },
});

export const { setListData } = listSlice.actions;

export default listSlice.reducer;
