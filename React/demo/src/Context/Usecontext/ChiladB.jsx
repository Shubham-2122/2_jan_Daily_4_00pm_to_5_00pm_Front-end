import React, { useContext } from 'react'
import { data } from './ChiladA'

function ChiladB() {

    const {form,setform} = useContext(data)

  return (
    <div>
      <h1>Hello This Chilad B</h1>
      <h1>hello count :- {form.count}</h1>
      <button onClick={()=>setform({count : form.count + 1})}>Incmrent</button>
    </div>
  )
}

export default ChiladB
