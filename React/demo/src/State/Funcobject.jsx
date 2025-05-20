import React, { useState } from 'react'
import Imagec from './Imagec'

function Funcobject() {

    const [data, setdata] = useState({
        name: "Aakash",
        count: 0,
        isimage: true
    })
    // console.log(data)
    // console.log(data.count)
    

    return (
        <div>
            <h1>Hello this function object</h1>
            <h1>hello name :- {data.name}</h1>
            <button onClick={() => setdata({ ...data, name: "shubham" })}>Change name1</button>
            <button onClick={() => setdata({ ...data, name: "dhavnit" })}>Change name2</button>

            <h1>Hello count :- {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Incement</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>dencement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Zero</button>
            <br /><br />
            <button onClick={() => setdata({ ...data,isimage : false })}>HIde</button>
                 <button onClick={() => setdata({ ...data,isimage : true })}>Show</button>
             <button onClick={() => setdata({ ...data,isimage : !data.isimage })}>Toggle</button>

            {
                (data.isimage) ? <Imagec /> : false
            }

        </div>
    )
}

export default Funcobject
