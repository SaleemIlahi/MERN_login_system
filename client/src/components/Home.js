import React, {useState,useEffect} from 'react'
import Navbar from "./Navbar";
import axios from 'axios';

const Home = () => {

    const [data,setData] = useState()
    const [show,setShow] = useState(false)


    const getData = async () => {
        try {
            await axios.get('/getData')
            .then(userData => {
                setData(userData.data.name)
                setShow(true)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <>
            <Navbar />
            <div className="container-fluid home text-center">
                <div className="row">
                    <div className="half-bg"></div>
                    <div className="text d-flex flex-column align-items-center justify-content-center">
                        <h1>Welcome</h1>
                        <h2>{data}</h2>
                        <h3>{show ? 'Happy to see You' : 'This is MERN Login System'}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
