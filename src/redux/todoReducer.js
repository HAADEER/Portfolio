//Action types
const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"

//Action
export const addTodoAction = (payload) => {
    return {
        type : ADD_TODO,
        payload 
    }
}
export const removeTodoAction = (payload) =>{
    return {
        type : REMOVE_TODO,
        payload
    }
}

//InitialState
const InitialState = {
    todos : [],
}

//Reducer
export const reducer = (state = InitialState , action) => {

    switch(action.type){
        case ADD_TODO :
            return {...state , todos: [...state.todos , action.payload]}

        case REMOVE_TODO :
            return {...state , todos : [...state.todos.filter((elem , indx) => {
                return indx !== action.payload
            })]}

        default:
            return state;
    }
}