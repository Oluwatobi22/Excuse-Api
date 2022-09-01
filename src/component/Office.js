import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Office = () => {
    const [Office, setOffice] = useState([])
    const OfficeApi = "https://excuser.herokuapp.com/v1/excuse/office"
    const getData = () => {
        axios.get(OfficeApi).then((result) => {
            let take = result.data[0]
            console.log(take);
            setOffice(take.excuse)
        })
    }
    return (
        <>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <button onClick={getData} className="btn btn-success mb-4 btn-block">Office</button>

                    </div>
                    <div className="col-md-6 me-5">
                        <div className='border border-2' style={{ width: "50vw", height: "30vh", margin: "20px", background:"white" }}>
                            {Office}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Office