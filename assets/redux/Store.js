import { createSlice, configureStore } from "@reduxjs/toolkit";

const userthemeSlice = createSlice({
  name: "userTheme",
  initialState: "",
  reducers: {
    updateusertheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateUserTheme } = userthemeSlice.actions;

const store = configureStore({
  reducer: {
    usertheme: userthemeSlice.reducer,
  },
});

export default store;
