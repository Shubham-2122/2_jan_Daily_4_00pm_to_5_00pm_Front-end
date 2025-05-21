import React, { useState } from 'react'

function Form() {

    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <form action="">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Enter your Name</label>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Enter your number</label>
                                <input type="tel" value={phone} onChange={(e) => setphone(e.target.value)} className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput4" className="form-label">Enter your Password</label>
                                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleFormControlInput4" placeholder="Enter your Password" />
                            </div>
                            <div>
                                <input type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
