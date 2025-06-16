import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import Navdata from '../Acoman/Navdata'
import axios from 'axios'

function Blogmange() {

    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blog")
        console.log(res.data)
        setblogs(res.data)
    }


    return (
        <div>
            <AHeader />
            <Navdata title="Blog Manage" name="Blogs" />
            <div className="container py-4">
                <h1 className='text-center'>Hello This Blog manage</h1>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">title</th>
                            <th scope="col">date</th>
                            <th scope="col">comment</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs && blogs.map((data) => {
                                console.log(data)
                                return (
                                    <tr  className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.title}</td>
                                        <td>{data.date}</td>
                                         <td>{data.comment}</td>
                                         <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                         </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Blogmange
