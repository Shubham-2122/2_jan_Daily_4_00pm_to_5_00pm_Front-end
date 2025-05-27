import React from 'react'

function D({name,setname}) {
  return (
    <div>
        <h1>hello D component</h1>
        <h1>Hello this Name :- {name}</h1>
        <button onClick={()=>setname("het patel")}>Change name</button>
    </div>
  )
}

export default D
