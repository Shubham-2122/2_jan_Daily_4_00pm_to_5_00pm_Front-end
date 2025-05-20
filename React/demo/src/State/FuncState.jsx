// function state :- hooks
// hooks :- hooks:- it's reuse ,define 
// hooks :- code reduce ;- hooks never use for class.
// Function hooks use
// let [define,setdefine] = useState()
// 1) useState() ;'- state 

import React, { useState } from 'react'
import Imagec from './Imagec';

function FuncState() {

    //  define , setdefine(method)
    const [name, setname] = useState("harshad");
    const [count, setcount] = useState(0);
    const [isimage, setisimage] = useState(true)

    const incmenret2 = () => {
        setcount(count + 2)
    }

    console.log(name)
    return (
        <div>
            <h1>Hello this function state</h1>
            <h1>Hello name :- {name}</h1>

            <button onClick={() => setname("Anash")}>Chnage name</button>
            <button onClick={() => setname("Brijesh")}>Change name2</button>

            <h1>hello count :- {count}</h1>
            <button className='btn btn-info' onClick={() => setcount(count + 1)}>Incrment</button>
            <button onClick={incmenret2}>Incemernt 2</button>
            <button className='btn btn-danger' onClick={() => setcount(count - 1)}>Decement</button>
            <button className='btn btn-success' onClick={() => setcount(0)}>Zero</button>
            <br /> <br />

            <button className='btn btn-info' onClick={() => setisimage(false)}>Hide</button>
            <button className='btn btn-danger' onClick={() => setisimage(true)}>Show</button>

            <button className='btn btn-primary' onClick={() => setisimage(!isimage)}>Toggle</button>

            {
                (isimage) ? <Imagec /> : false
            }

        </div>
    )
}

export default FuncState
