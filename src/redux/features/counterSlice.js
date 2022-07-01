
import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
    count : 0 ,
}

//slicer
export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        IncrementAction : (state) => {
            state.count += 1
        },
        DecrementAction : (state) => {
            state.count -= 1
        }

    }
})

export const {IncrementAction , DecrementAction} = counterSlice.actions
export default counterSlice.reducer 