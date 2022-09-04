import { createSlice } from "@reduxjs/toolkit";
import currentUserImage from "../asset/images/avatars/image-juliusomo.png";

const initialState = {
    currentUser: {
        image: currentUserImage,
        username: "juliusomo",
        id: 4,}
      }


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
       
    }
})

export const getCurrentUser = (state) => state.users.currentUser

export const usersReducer = usersSlice.reducer