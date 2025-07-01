// useReducer logic reuse
// global state manage
// complex state manage
import React, { useReducer } from 'react'
import Header from '../Layout/Coman/Header'

const initialstate = 0

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state = state + 1
            break;
        case 'decrement':
            return state = state - 1
            break;
        case 'Zero':
            return initialstate
            break;
        default:
            return state
            break;
    }
}

function Usedata() {

    const [count,dispatch] = useReducer(reducer,initialstate)
    
  return (
    <div>
        <Header />
      <h1>Hello this count : {count}</h1>
      <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("Zero")}>zero</button>
    </div>
  )
}

export default Usedata
