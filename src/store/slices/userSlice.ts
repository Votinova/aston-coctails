import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: '',
    password: '',
    id: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = '';
            state.password = '';
            state.id = '';
        }
    }

})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;