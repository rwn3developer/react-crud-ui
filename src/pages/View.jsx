import React from 'react'
import Header from '../component/Header'
import './style.css'
import { Link } from 'react-router-dom'

const View = () => {
    return (
        <div>
            <Header />
            <div className='view-user'>
                <div className="container">
                    <div className="row">
                        <div className='addbtn d-flex justify-content-end mt-3 mb-3'>
                            <Link to={`/add`}>
                                <button type='button' className='btn btn-success'>Add</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <table className="p-3 table table-hover shadow">
                            <thead className="table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm m'>Delete</button>
                                        <Link to={`/edit`}>
                                            <button className='btn btn-primary btn-sm ms-2'>Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
