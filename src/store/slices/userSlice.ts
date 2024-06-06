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
    }

})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;