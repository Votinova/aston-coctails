import { createSlice } from "@reduxjs/toolkit";
import { InitialStateUser } from "../../types/typeContext";
import { auth } from "../../firebaseConfig";

const initialState: InitialStateUser = {
    isAuth: auth ? true : false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = null
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;