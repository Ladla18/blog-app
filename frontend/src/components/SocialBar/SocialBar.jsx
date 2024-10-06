import React from 'react'

function SocialBar({classProp,socialName}) {
  return (
    <div className="row my-1">
        <div className="col-sm-12">
            <button className={classProp}>{socialName}</button>
        </div>
    </div>
  )
}

export default SocialBar