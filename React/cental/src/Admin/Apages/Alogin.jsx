import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
        }
    },[])


    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault();




        try {
            const { email, password } = form

            // if (email == "" || password) {
            //     console.log("Pls field required..!")
            //     return false
            // }

            if (!email.trim() || !password.trim()) {
                console.log("Pls field required...!")
                toast.error("Pls field required...!")
                return false
            }

            // email id match
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)
            if(res.data.length === 0){
                console.log("Email id Does not match...!")
                 toast.error("Email id Does not match...!")
                return false
            }

            let admin = res.data[0]
            // password
            if(admin.password !== password){
                console.log("Password does not match..!")
                toast.error("Password Does not match...!")
                return false
            }

            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            redirect("/dash")
            toast.success("Login successfully...")
            console.log("Login success...!")


        } catch (error) {
            console.log("APi data not found..", error)
        }
    }

    return (
        <div>
            <div className="container">
                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>

                            <form action="" onSubmit={getsubmit}>
                                <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                        <h2 className="fw-bold text-light mb-2 text-uppercase">Admin Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                        <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                        <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                            Login
                                        </MDBBtn>

                                        <div className='d-flex flex-row mt-3 mb-5'>
                                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                                <MDBIcon fab icon='facebook-f' size="lg" />
                                            </MDBBtn>

                                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                                <MDBIcon fab icon='twitter' size="lg" />
                                            </MDBBtn>

                                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                                <MDBIcon fab icon='google' size="lg" />
                                            </MDBBtn>
                                        </div>

                                        <div>
                                            <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </form>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </div>
    )
}

export default Alogin
