import React from 'react'
import Header from './Header'

const Create = () => {
  return (
    <div>
      <Header/>
      <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">


            <div className="row g-3 mt-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="" className="form-label"> Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="" className="form-label"> Designation</label>
                    <input type="text" className="form-control" />
                </div>
              
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="" className="form-label"> Location</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="" className="form-label"> Salary</label>
                    <input type="text" className="form-control" />
                </div>
                
               
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <button className="btn btn-danger">Register</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <a href="/"> Back to Dashboard </a>
                </div>
            </div>



        </div>
    </div>
</div>



    </div>
  )
}

export default Create