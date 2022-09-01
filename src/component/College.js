import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const College = () => {
   const [college, setcollege] = useState([])
    const CollegeApi = "https://excuser.herokuapp.com/v1/excuse/college"
    const getData = () => {
        axios.get(CollegeApi).then((result) => {
          let take = result.data[0]
          console.log(take);
          setcollege(take.excuse)
        })
      }
  return (
    <>
        <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <button onClick={getData} className="btn mb-4 btn-danger">College</button>
                        
                    </div>
                    <div className="col-md-6 me-5">
                        <div className='border border-2' style={{width:"50vw",height:"30vh", margin:"20px",background:"white"}}>
                            {college}  
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default College