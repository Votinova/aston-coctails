import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDrink } from "../../types/typeContext";


export const likesSlice = createSlice({
    name: 'likes',
    initialState:  <IDrink[]> [],
    reducers: {
        setLikes: (state, action: PayloadAction<IDrink>) => {
            state.push(action.payload)
        },
        removeLikes: (state) => {
            state = []
        }
    }
})
export const {setLikes, removeLikes} = likesSlice.actions;
export default likesSlice.reducer