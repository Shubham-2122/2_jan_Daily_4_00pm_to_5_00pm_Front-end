// useEffect :- Function Side effect :- function effect call it.
// useEffect :- APi call 
// useEffect :- function call compusry , depedsides :- opational
// useEffect re-rending :- Dom  

import React, { useEffect, useState } from 'react'

function Usedata() {

    //1) depen empty
    // useEffect(()=>{
    //     console.log("effet outside")
    //     return(()=>{
    //         console.log("Effect inside")
    //     })
    // })

    // 2) depen [] :- blank array  :- automaticlly
    // useEffect(()=>{
    //     console.log("effet outside")
    //     return(()=>{
    //         console.log("Effect inside")
    //     })
    // },[])

    // 3) depen [state] 

    const [name,setname] = useState("Karan")
    
    useEffect(()=>{
         console.log("effet outside")
        return(()=>{
            console.log("Effect inside")
        })
    },[name])

  return (
    <div>
        <h1>hello UseEFfect</h1>

        <h1>Hello {name}</h1>

        <button onClick={()=>setname("Het patel")}>Chnage name</button>
    </div>
  )
}

export default Usedata
