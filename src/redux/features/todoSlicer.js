import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todo : [],
}

export const todoSlice = createSlice ({
    name : "todo" ,
    initialState ,
    reducers : {
        addTodoAction : (state , action) => {
            state.todo.push(action.payload)
        },

        removeTodoAction : (state , action) => {
            state.todo.splice(action.payload , 1)
        }
    }
})
export default todoSlice.reducer
export const {addTodoAction , removeTodoAction} = todoSlice.actions