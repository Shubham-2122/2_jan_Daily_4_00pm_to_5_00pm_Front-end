import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Useaxios() {

    const [data,setdata] = useState([])

    useEffect(()=>{
        fetdtata()
    },[])

    const fetdtata=async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setdata(res.data)
    }

  return (
    <div>
      {
        console.log(data)
      }
    </div>
  )
}

export default Useaxios
