import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
function AdminDashboard() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-10">Admin Panel To Post Data</h1>
        <div className="row mb-10 mt-5">
          <div className="col-sm-3 ">
            <button className="btn rounded-0   btn-primary">
              <Link
                to="/admin/mobiles"
                className="text-light text-decoration-none"
              >
                Mobiles
              </Link>
            </button>
          </div>
          <div className="col-sm-3 ">
            <button className="btn  rounded-0  btn-primary">
              <Link
                to=""
                className="text-light text-decoration-none"
              >
                Laptop
              </Link>
            </button>{" "}
          </div>
          <div className="col-sm-3 ">
            <button className="btn  rounded-0  btn-primary">
              <Link
                to=""
                className="text-light text-decoration-none"
              >
                Accessories
              </Link>
            </button>
          </div>
          <div className="col-sm-3 ">
            <button className="btn  rounded-0  btn-primary">
              <Link
                to=""
                className="text-light text-decoration-none"
              >
                Electronics
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard