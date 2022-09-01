// import React from 'react'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Party = () => {
    const [party, setparty] = useState([])
    const PartyApi = "https://excuser.herokuapp.com/v1/excuse/office"
    const getData = () => {
        axios.get(PartyApi).then((result) => {
            let take = result.data[0]
            console.log(take);
            setparty(take.excuse)
        })
    }
    return (
        <>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <button onClick={getData} className="btn btn-warning mb-4 btn-block">Party</button>
                    </div>
                    <div className="col-md-6 me-5">
                        <div className='border border-2' style={{ width: "50vw", height: "30vh", margin: "20px", background:"white" }}>
                            {party}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Party