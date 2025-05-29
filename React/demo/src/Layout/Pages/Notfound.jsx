import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Notfound() {

    const redirect = useNavigate()

    const backtohome=()=>{
        redirect("/")
    }

  return (
    <div className='container'>
      <h1 className='text-center text-danger my-5'>404 Not Found data</h1>
      {/* <Link to="/" className='btn btn-primary'>Back to Home</Link> */}
      <button className='btn btn-info'onClick={backtohome}>Back to Home</button>
    </div>
  )
}

export default Notfound
