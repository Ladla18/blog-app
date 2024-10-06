import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
function AdminDashboard() {
  return (
    <>
      <div className="container">
        
        <div className="row">
          <div className="col-sm-3 ">
          <button className='btn  btn-primary'>
          <Link to='/admin/mobiles' className='text-light text-decoration-none'>Mobiles</Link>
          </button>
          </div>
          <div className="col-sm-3 ">
            <a as={Link} to="/admin/computers" className='btn btn-outile-success p-3'>Computers</a>
          </div>
          <div className="col-sm-3 ">
            <a as={Link} to="/" className='btn btn-outile-success p-3'>Laptop</a>
          </div>
          <div className="col-sm-3 ">
            <a as={Link} to="/" className='btn btn-outile-success p-3'>Accessories</a>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default AdminDashboard