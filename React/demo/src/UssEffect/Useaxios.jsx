import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Useaxios() {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetdtata()
  }, [])

  const fetdtata = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    // console.log(res.data)
    setdata(res.data)
  }

  return (
    <div className='container'> 
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">name</th>
            <th scope="col">Email</th>
            <th scope="col">phone</th>
            <th scope="col">company</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((user, index) => {
              console.log(user)
              const {id,name,email,phone,company} = user
              return (
                <tr key={index}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{company.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Useaxios
