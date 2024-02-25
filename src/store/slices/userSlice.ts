import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: '',
    password: '',
    token: 0,
    id: 0
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = '';
            state.password = '';
            state.token = 0;
            state.id = 0;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;