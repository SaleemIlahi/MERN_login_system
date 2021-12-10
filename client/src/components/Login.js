import React, {useState} from 'react'
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const userDetails = {
        email: '',
        password: ''
    }

    const navigate = useNavigate()
    const [user, setUser] = useState(userDetails)

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user, [name]: value
        })
    }

    const userLogin = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/login',user)
            .then((res) => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))

            setUser(userDetails)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>   
            <Navbar />
            <div className="container login">
                <div className="row">
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL + './image/pic-2.svg'} alt="pic-2" className="img-fluid" />
                    </div>
                    <div className="col-4">
                        <h1 className="mt-2">Login</h1>
                        <form method="POST">
                            <div className="mb-5">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="abcd@gmail.com" value={user.email} onChange={handleChange} name="email" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="***********" value={user.password} onChange={handleChange} name="password" required />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-primary" onClick={userLogin}>Login</button>
                                <Link to="/signup">Create Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
