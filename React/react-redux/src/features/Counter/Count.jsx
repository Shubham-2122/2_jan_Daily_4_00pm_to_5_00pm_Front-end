import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './countSlice'

function Count() {

    const count = useSelector((state)=> state.counter.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      {/* <h1>Hello this h1 tag</h1> */}
      <h1>Hello count :- {count}</h1>

      <button onClick={()=>dispatch(increment())}>Incrmeent</button>
         {/* <button onClick={()=>dispatch(decrement())}>decrmeent</button> */}
            <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Count
