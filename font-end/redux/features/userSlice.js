import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
      user: {},
      users: [],
      error: "",
      loading: false,
    },
    extraReducers: {
    //   [listUser.pending]: (state, action) => {
    //     state.loading = true;
    //   },
    //   [listUser.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.users = action.payload;
    //   },
    //   [listUser.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    //   },

    },
  });
  export default userSlice.reducer;