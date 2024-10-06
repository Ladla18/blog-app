import React from 'react'
import "./ProductPreview.css"
function ProductPreview({image,title,date,description,category}) {
    return (
        <div className="row mt-5">
            <div className="col-sm-12">
                <div  className='product-Image'>
                <img src={image} alt="No Image Found" />
                </div>
                <div className='date-detail'><span>{date}</span> / <span>{category}</span></div>
                <div className='product-title mt-2'><h2>{title}</h2></div>
                <div className='product-description mt-3'>
                    <p>{description}</p>
                </div>
                <div className='mt-3'>
                    <button className='btn btn-dark rounded-0'>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview