import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        stringSearch: ''
    },
    reducers: {
        setSearch: (state, action) => {
            state.stringSearch = action.payload.search;
        }
    }
})
export const {setSearch} = searchSlice.actions;
export default searchSlice.reducer;