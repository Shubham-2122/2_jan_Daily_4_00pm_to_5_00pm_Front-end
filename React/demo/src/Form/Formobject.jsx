import React, { useState } from 'react'

function Formobject() {

    const [form, setfrom] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })


    const getchange = (e) => {
        setfrom({
            ...form,
            // name == value
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        {/* <form action="">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Enter your Name</label>
                                    <input type="text" value={form.name} onChange={(e) => setfrom({ ...form, name: e.target.value })} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" value={form.email} onChange={(e) => setfrom({ ...form, email: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Enter your number</label>
                                    <input type="tel" value={form.phone} onChange={(e) => setfrom({ ...form, phone: e.target.value })} className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label">Enter your Password</label>
                                    <input type="password" value={form.password} onChange={(e) => setfrom({ ...form, password: e.target.value })} className="form-control" id="exampleFormControlInput4" placeholder="Enter your Password" />
                                </div>
                                <div>
                                    <input type="submit" />
                                </div>
                            </div>
                        </form> */}
                        <form action="">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Enter your Name</label>
                                    <input type="text" name='name' value={form.name} onChange={getchange} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" name='email' value={form.email} onChange={getchange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Enter your number</label>
                                    <input type="tel" name='phone' value={form.phone} onChange={getchange} className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label">Enter your Password</label>
                                    <input type="password" name='password' value={form.password} onChange={getchange} className="form-control" id="exampleFormControlInput4" placeholder="Enter your Password" />
                                </div>
                                <div>
                                    <input type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formobject
