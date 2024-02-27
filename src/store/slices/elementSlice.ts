import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
    name: "element",
    initialState: {id: 0},
    reducers: {
        setElement(state, action) {
             state.id = action.payload.id   
        }
    }

})
export const {setElement} = elementSlice.actions;
export default elementSlice.reducer
