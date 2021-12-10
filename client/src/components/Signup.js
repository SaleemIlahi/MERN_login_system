import React, { useState } from 'react'
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {

    const navigate = useNavigate()

    const userDetails = {
        name: '',
        number: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState(userDetails)
    const [userdata, setUserData] = useState([])

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user, [name]: value
        })
    }

    const registerData = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/register', user)
                .then(res => {
                    setUserData(res.data)
                    console.log(userdata)
                    setUser(userDetails)
                    navigate('/login')

                })
                .catch(err => {
                    console.log(err)
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="container signup">
                <div className="row">
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL + './image/pic-1.svg'} alt="pic-1" className="img-fluid" />
                    </div>
                    <div className="col-4">
                        <h1 className="mt-2">Sign Up</h1>
                        <form method='POST'>
                            <div className="mb-5">
                                <label htmlFor="name" className="form-label">Username</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Username" value={user.name} onChange={handleChange} name="name" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="number" className="form-label">Mobile Number</label>
                                <input type="number" className="form-control" id="number" placeholder="+91 *********" value={user.number} onChange={handleChange} name="number" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="abcd@gmail.com" value={user.email} onChange={handleChange} name="email" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="***********" value={user.password} onChange={handleChange} name="password" required />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-primary" onClick={registerData}>Sign Up</button>
                                <Link to="/login">I am already Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
