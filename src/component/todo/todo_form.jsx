
import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [title , setTitle] = useState("")

    const [content , setContent] = useState("")

    const submiteTodoData = (e) =>{
        e.preventDefault()
        addTodo({title , content})
        setTitle("")
        setContent("")

    }

  return (
    <div className='d-flex justify-content-center'>
    <form onSubmit={submiteTodoData}>
    <label className='text-center'>Title</label>
    <br/>
    <input type="text"
    name='title'
    className='mb-3'
    value={title}
    onChange={(e)=>{setTitle(e.target.value)}}></input>
    <br/>
    <label>Content</label>
    <br/>
    <textarea name='content' cols='22' rows='3' value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
    <br/>
    <button className='btn btn-success m-auto my-3' type='submit'>Add</button>
    </form>
    </div>
  )
}

export default TodoForm