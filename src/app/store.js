import { createSlice, configureStore } from "@reduxjs/toolkit";

export const jwtSlice = createSlice({
  name: "jwt",
  initialState: {
    value: "",
  },
  reducers: {
    setJWT: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setJWT } = jwtSlice.actions;

export default configureStore({
  reducer: {
    jwt: jwtSlice.reducer,
  },
});
