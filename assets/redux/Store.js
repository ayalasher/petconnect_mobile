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

export const { updateUserTheme } = userthemeSlice.actions;

const store = configureStore({
  reducer: {
    userTheme: userthemeSlice.reducer,
  },
});

export default store;
