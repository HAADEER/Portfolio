import React, { useState } from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import TodoForm from '../../component/todo/todo_form'
import TodoList from '../../component/todo/todo_list'
import { addTodoAction, removeTodoAction } from '../../redux/todoReducer'

const Todo = () => {

    const reduxState = useSelector(state => state.todos)
    const reduxDispatch = useDispatch();

    console.log("reduxState : " ,reduxState);

     const [todos , setTodo] = useState([
         {
             title : "task1" ,
             content : "todo list"
        }
     ])
  //task is object {title , content}
    const addTodo = (task)=>{
        //setTodo([...todos , task])
        reduxDispatch(addTodoAction(task))
    }

    const removeTodo = (index)=>{
        //setTodo(todos.filter((item , inx)=>{return inx !== index}))
        reduxDispatch(removeTodoAction(index))
    }

  return (
    <>
    <h2 className='text-center text-info'>Todo List</h2>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={reduxState} removeTodo={removeTodo}/>
    </>
  )
}

export default Todo