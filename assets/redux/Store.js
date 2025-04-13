import { createSlice, configureStore } from "@reduxjs/toolkit";

const userthemeSlice = createSlice({
  name: "userTheme",
  initialState: { value: "" },
  reducers: {
    updateUserTheme: (state, action) => {
      return action.payload;
    },
  },
});

const userDataslice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    updateUserData: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateUserTheme } = userthemeSlice.actions;
export const { updateUserData } = userDataslice.actions;

const store = configureStore({
  reducer: {
    userTheme: userthemeSlice.reducer,
    updateUserData: userDataslice.reducer,
  },
});

export default store;
