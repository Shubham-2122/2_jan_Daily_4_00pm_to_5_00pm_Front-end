import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header'

function UseRefd() {
  
    // useRef refres data modify real dom
    const refelemet = useRef()

    const getfo = ()=>{
        refelemet.current.focus()
        refelemet.current.style.color = "red"
         refelemet.current.style.background = "blue"
    }

    return (
    <div>
      <Header />

      <input ref={refelemet} type="text" />
      <button onClick={getfo}>Focus</button>
    </div>
  )
}

export default UseRefd
