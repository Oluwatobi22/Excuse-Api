import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Children = () => {
    const [children, setchildren] = useState([])
    const ChilApi = "https://excuser.herokuapp.com/v1/excuse/children"
    const getData = () => {
        axios.get(ChilApi).then((result) => {
            let take = result.data[0]
            setchildren(take.excuse)
            console.log(take);
        })
    }
    return (
        <>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <button onClick={getData} className="btn btn-primary mb-4 btn-block">Children</button>
                        
                    </div>
                    <div className="col-md-6 me-5">
                        <div className='border border-2' style={{width:"50vw",height:"30vh", margin:"20px",background:"white"}}>
                            {children}  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Children