import React, { useContext } from 'react'
import { data } from './ChiladA'

function ChailD() {

    const {name,setname} = useContext(data)

  return (
    <div>
      <h1>Hello This Chilad D</h1>
      <h1>hello This NAme :- {name}</h1>
      <button onClick={()=>setname("DAta")}>change name</button>
    </div>
  )
}

export default ChailD
