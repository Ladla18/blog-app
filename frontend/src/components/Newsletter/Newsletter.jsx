import React from 'react'

function Newsletter() {
  return (
    <div className="row mb-4">
        <h6>JOIN THE NEWSLETTER!</h6>
        <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adi</p>
        <input className='form-control rounded-0 text-secondary' type="text" placeholder='Your E-Mail' name="emailNewsletter" id="" />
        <button className='btn btn-dark rounded-0 text-light mt-1'>SUBMIT</button>
    </div>
  )
}

export default Newsletter