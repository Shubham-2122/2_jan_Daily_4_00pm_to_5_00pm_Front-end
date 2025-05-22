import React, { useEffect, useState } from 'react'

function Usetable() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fethdata()
    }, [])

    const fethdata = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await res.json()
        // console.log(result)
        setdata(result)
    }

    return (
        <div>
            <table className="table">
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
                            return (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Usetable
