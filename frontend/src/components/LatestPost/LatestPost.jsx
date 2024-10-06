import React from 'react'
import "./LatestPost.css"
function LatestPost({image,info,date}) {
  return (
    <div className="row mt-4">
        <div className="col-sm-12 latest-post">
            <div className='latest-post-img'><img src={image} alt="Image Not Available"/></div>
            <div className='ms-2'>
                <div>{info}</div>
                <div className='text-secondary latest-post-date'>{date}</div>
            </div>
        </div>
    </div>
  )
}

export default LatestPost