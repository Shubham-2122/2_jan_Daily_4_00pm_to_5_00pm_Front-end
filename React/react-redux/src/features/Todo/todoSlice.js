import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : ["Harsh","Aniket"]
}

export const todoSlice = createSlice({
    name :"todos",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            state.todos.push(action.payload)
        },
        removeTodo : (state,action)=>{
            // stateindex ==1 !== action id
            state.todos = state.todos.filter((data,index)=> index !== action.payload)
        } 
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;