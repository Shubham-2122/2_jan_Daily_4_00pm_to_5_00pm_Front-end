import React, { useState } from 'react'

function FuncLife() {
  
    // initial phase motuing
    const [name,setname] = useState("sadh")

    return (
    <div>
      <h1>hello name :- {name}</h1>
      {/* update phase */}
      <button onClick={()=>setname("data")}>chnage name</button>
    </div>
  )
}

export default FuncLife
