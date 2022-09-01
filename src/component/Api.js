import React from 'react'
import axios from 'axios'
import College from './College'
import { useState } from 'react'
const Api = () => {
    const [Excuse, setExcuse] = useState([])
    const ApiExcuse = "https://excuser.herokuapp.com/v1/excuse/family"
    const getData = () => {
        axios.get(ApiExcuse).then((result) => {
            let take = result.data[0]
            console.log(take);
            setExcuse(take.excuse)
        })
    }
    return (
        <>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <button onClick={getData} className="btn btn-primary mb-4 btn-block">Excuse</button>
                        
                    </div>
                    <div className="col-md-6 me-5">
                        <div className='border border-2' style={{width:"50vw",height:"30vh", margin:"20px",background:"white"}}>
                            {Excuse}
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Api