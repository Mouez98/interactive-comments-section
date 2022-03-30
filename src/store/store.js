import { configureStore } from "@reduxjs/toolkit";

import { commentsReducer } from "./commets";

const store = configureStore({
  reducer: commentsReducer,
});


export default store;
