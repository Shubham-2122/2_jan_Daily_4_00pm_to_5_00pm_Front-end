import React, { createContext, useState } from 'react';
import ChailD from './ChailD';
import ChiladB from './ChiladB';
import ChaildC from './ChaildC';

export const data = createContext()

function ChiladA() {

    const [name,setname] = useState("Brijesh")
    const [form,setform]= useState({
        count : 0
    })

  return (
    <div>
      <h1>Hello This Chilad A</h1>
      {/* 1) create context */}
      {/* 2) context data provider */}
      {/* 3) useContext other use */}

      <data.Provider value={{name,setname,form,setform}}>
        <ChailD />
        <ChiladB />
        <ChaildC />
      </data.Provider>
    </div>
  )
}

export default ChiladA
