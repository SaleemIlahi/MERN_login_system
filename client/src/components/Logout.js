import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {

    const navigate = useNavigate()

    const userlogout = async () => {
        try {
            await axios.get('/logout')
            .then((res) => {
                console.log(res)
                navigate('/login',{replace: true})
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    userlogout()
    return (
        <h1>
            logout
        </h1>
    )
}

export default Logout
