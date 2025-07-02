import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './todoSlice'

function Todolist() {

    const todos = useSelector((state)=>state.todo.todos)
    console.log(todos)

    const dispatch = useDispatch()

  return (
    <div>
      
      <ul>
        {
            todos && todos.map((todo,index)=>{
                return(
                    <li>{todo} <button onClick={()=>dispatch(removeTodo(index))}>Delete</button> <button>Edit</button></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
