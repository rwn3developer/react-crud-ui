import React from 'react'
import Header from '../component/Header'
import './style.css'
import { Link } from 'react-router-dom'

const Edit = () => {
    return (
        <div>
            <Header />
            <div className='view-user'>
                <div className="container">
                    <div className="row">
                        <div className='addbtn d-flex justify-content-end mt-3 mb-3'>
                            <Link to={`/`}>
                                <button type='button' className='btn btn-success'>View</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <form>
                                <div className='p-5 w-75 shadow' style={{backgroundColor:"white"}}>
                                    <div className="form-group">
                                        <label htmlFor="email">Name :- </label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="pwd">Phone :- </label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary mt-4">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
