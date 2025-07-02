import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function Addtodo() {
    
    const [form,setform] = useState("");

    const dispatch = useDispatch()

    const getdata=(e)=>{
        e.preventDefault();
        
        dispatch(addTodo(form))
        setform("")
    }

    return (
        <div>
            <h1>Hello this Todo List</h1>
            <form action="">
                <input type="text" value={form} onChange={(e)=>setform(e.target.value)} placeholder='Enter your name' name="" id="" />
                <button onClick={getdata}>Adddata</button>
            </form>
        </div>
    )
}

export default Addtodo
