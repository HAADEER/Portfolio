import React, { useState } from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import TodoForm from '../../component/todo/todo_form'
import TodoList from '../../component/todo/todo_list'
import {addTodoAction , removeTodoAction} from "../../redux/features/todoSlicer"
const Todo = () => {

    const reduxState = useSelector(state => state.todo.todo)

    const reduxDispatch = useDispatch();


    const addTodo = (task)=>{
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