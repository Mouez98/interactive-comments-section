import { configureStore } from "@reduxjs/toolkit";

import { commentsReducer } from "./commentsSlice";
import { repliesReducer } from "./repliesSlice";
import { usersReducer } from "./usersSlice";

const store = configureStore({
  reducer: {comments: commentsReducer, users: usersReducer, replies: repliesReducer}
});


export default store;
