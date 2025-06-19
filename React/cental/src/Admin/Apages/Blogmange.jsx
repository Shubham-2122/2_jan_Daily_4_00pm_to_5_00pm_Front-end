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

    const [blogdata, setblogdata] = useState({
        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        img: ""
    })

    // get iduvasal product
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`)
        console.log(res.data)
        setblogdata(res.data)
    }

    const removepro = async (id) => {
        const res = await axios.delete(`http://localhost:3000/blog/${id}`)
        console.log(res.data)
        fetchdata()
    }

    // UPDATE DATA  model
    const [blogupdate, setblogupdate] = useState(null)
    const [updateblogs, setupdateblogs] = useState({
        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        img: ""
    })


    const openmodel = (id) => {
        setblogupdate(id)
        setupdateblogs(id)
    }

    const datachnage = (e) => {
        setupdateblogs({
            ...updateblogs,
            [e.target.name]: e.target.value
        })
        console.log(updateblogs)
    }

    const updatedataa = async (e) => {
        e.preventDefault()

        const res = await axios.put(`http://localhost:3000/blog/${updateblogs.id}`, updateblogs)
        console.log(res.data)
        fetchdata()
        
        setupdateblogs({
            id: "",
            title: "",
            desc: "",
            comment: "",
            name: "",
            date: "",
            img: ""
        })
        setblogupdate(null)
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
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.title}</td>
                                        <td>{data.date}</td>
                                        <td>{data.comment}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)}>View</button>
                                            <button className='btn btn-success mx-2' onClick={() => openmodel(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => removepro(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-lg-12" data-wow-delay="0.1s">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src={blogdata.img} className="img-fluid rounded-top w-100" style={{ height: "200px" }} alt="Image" />
                                        </div>
                                        <div className="blog-content rounded-bottom p-4">
                                            <div className="blog-date">{blogdata.date}</div>
                                            <div className="blog-comment my-3">
                                                <div className="small"><span className="fa fa-user text-primary" /><span className="ms-2">{blogdata.name}</span></div>
                                                <div className="small"><span className="fa fa-comment-alt text-primary" /><span className="ms-2">{blogdata.comment} Comments</span></div>
                                            </div>
                                            <a href="#" className="h4 d-block mb-3">{blogdata.title}</a>
                                            <p className="mb-3">{blogdata.desc}</p>
                                            <a href="#" className>Read More  <i className="fa fa-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    blogupdate && (
                        <div className="bg-secondary p-5 rounded">
                            <h4 className="text-primary mb-4">Blogs Update Data</h4>
                            <form >
                                <div className="row g-4">
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" value={updateblogs && updateblogs.title} name='title' onChange={datachnage} className="form-control" id="name" placeholder="Your title" />
                                            <label htmlFor="name">Your title</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" value={updateblogs && updateblogs.name} name='name' onChange={datachnage} className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" value={updateblogs && updateblogs.comment} name='comment' onChange={datachnage} className="form-control" id="comment" placeholder="Your comment" />
                                            <label htmlFor="comment">Your comment</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="date" value={updateblogs && updateblogs.date} name='date' onChange={datachnage} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" value={updateblogs && updateblogs.img} name='img' onChange={datachnage} className="form-control" id="image" placeholder="your Images url" />
                                            <label htmlFor="image">your Images url</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" value={updateblogs && updateblogs.desc} name='desc' onChange={datachnage} placeholder="Leave a message here Desc" id="message" style={{ height: 160 }} defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button className="btn btn-light w-100 py-3" onClick={updatedataa}>update blogs</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="btn btn-light w-100 py-3" onClick={() => setblogupdate(null)}>cancle blogs</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Blogmange
