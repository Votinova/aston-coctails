import { createSlice } from "@reduxjs/toolkit";


export const isLikeSlice = createSlice({
    name: 'isLike',
    initialState: {
        isLike: false
    },
    reducers: {
        setIsLike: (state, action) => {
            state.isLike = action.payload.isLike
        }
    }
})

export const {setIsLike} =isLikeSlice.actions;
export default isLikeSlice.reducer