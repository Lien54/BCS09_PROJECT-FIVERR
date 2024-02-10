import { createSlice } from "@reduxjs/toolkit";
import { getLocalStore } from "../../utils/local";

const initialState = {
  user: getLocalStore("user_Info"),
  role: "",
};


export const uerSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    saveInfoUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveInfoUser } = uerSlice.actions;

export default uerSlice.reducer;
