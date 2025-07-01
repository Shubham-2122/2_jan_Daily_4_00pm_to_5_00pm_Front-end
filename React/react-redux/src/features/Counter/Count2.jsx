import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from './countSlice'

function Count2() {

    const counter = useSelector((state)=> state.counter.value)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello count:- {counter}</h1>

      <button onClick={()=>dispatch(decrement())}>Decmenert</button>
    </div>
  )
}

export default Count2
