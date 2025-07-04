import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showuser } from '../Slicedata/userSlice'

function Read() {

    const users = useSelector((state) => state.users.user)

    console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showuser())
    }, [])

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <button>View</button>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Read
