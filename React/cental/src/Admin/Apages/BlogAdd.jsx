import React, { useState } from 'react'
import AHeader from '../Acoman/AHeader'
import Navdata from '../Acoman/Navdata'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function BlogAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        img: ""
    })

    // hadling form
    const getchange = (e) => {
        setform({
            ...form,
            // new id create
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    // submit form

    const hadlingblog = async (e) => {
        e.preventDefault()

        // if(form.date == " " ){
        //     console.log("")
        // }

        const res = await axios.post("http://localhost:3000/blog", form)
        console.log(res.data)
        redirect("/blogmanage")
        setform({
            id: "",
            title: "",
            desc: "",
            comment: "",
            name: "",
            date: "",
            img: ""
        })

    }

    return (
        <>
            <AHeader />
            <Navdata title="BlogAdd" name="blog Add" />
            <div className='container py-5'>
                <div className="bg-secondary p-5 rounded">
                    <h4 className="text-primary mb-4">Blogs Add Data</h4>
                    <form onSubmit={hadlingblog}>
                        <div className="row g-4">
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.title} name='title' onChange={getchange} className="form-control" id="name" placeholder="Your title" />
                                    <label htmlFor="name">Your title</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.name} name='name' onChange={getchange} className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your name</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.comment} name='comment' onChange={getchange} className="form-control" id="comment" placeholder="Your comment" />
                                    <label htmlFor="comment">Your comment</label>
                                </div>
                            </div>

                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="date" value={form.date} name='date' onChange={getchange} className="form-control" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={form.img} name='img' onChange={getchange} className="form-control" id="image" placeholder="your Images url" />
                                    <label htmlFor="image">your Images url</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" value={form.desc} name='desc' onChange={getchange} placeholder="Leave a message here Desc" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-light w-100 py-3">Add blogs</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BlogAdd
