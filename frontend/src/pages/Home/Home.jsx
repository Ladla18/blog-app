import React from 'react'
import "./Home.css"
import ProductPreview from '../../components/ProductPreview/ProductPreview'
import Pagination from '../../components/Pagination/Pagination'

import RightPart from '../../components/RightPart/RightPart'
function Home() {
  const postTags = [
    "display", "camera", "processor", "battery", "storage", "memory", "operating system",
    "design", "build quality", "size", "weight", "color",
    "5g", "4g", "wifi", "bluetooth", "gps",
    "fingerprint scanner", "face recognition", "water resistance", "wireless charging", "audio quality",
    "night mode", "portrait mode", "zoom",
    "budget", "mid-range", "flagship", "gaming", "photography", "business"
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-6 col-lg-12">
              <ProductPreview
                image="public/images/two.jpeg"
                title="New Transparent Smartphone in Market"
                date="2023-11-22"
                category="Smartphone-Gadgets"
                description="Lorem ipsum dolor sit, amet consectetur adipisicinelit  Ducimus voluptatem facere  dolor sit, amet consectetur adipisicingelit Ducimus voluptatem facere  corporis animi optio cupiditate voluptate quisquam, nostrum similique voluptates nulla laborum maiores in laudantium blanditiis at eos reprehenderit? Culpa."
              />
            </div>
            <div className="col-6 col-lg-12">
              <ProductPreview
                image="public/images/three.jpg"
                title="New Transparent Smartphone in Market"
                date="2023-11-22"
                category="Smartphone-Gadgets"
                description="Lorem ipsum dolor sit, amet consectetur adipisicinelit  Ducimus voluptatem facere  dolor sit, amet consectetur adipisicingelit Ducimus voluptatem facere  corporis animi optio cupiditate voluptate quisquam, nostrum similique voluptates nulla laborum maiores in laudantium blanditiis at eos reprehenderit? Culpa."
              />
            </div>
            <div className="col-6 col-lg-12">
              <ProductPreview
                image="public/images/one.jpg"
                title="New Transparent Smartphone in Market"
                date="2023-11-22"
                category="Smartphone-Gadgets"
                description="Lorem ipsum dolor sit, amet consectetur adipisicinelit  Ducimus voluptatem facere  dolor sit, amet consectetur adipisicingelit Ducimus voluptatem facere  corporis animi optio cupiditate voluptate quisquam, nostrum similique voluptates nulla laborum maiores in laudantium blanditiis at eos reprehenderit? Culpa."
              />
            </div>

          </div>

          <div className="row">
            <div className="col-sm-12">
              <Pagination />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <RightPart postTags={postTags}/>
        </div>

      </div>
    </div>




  )
}

export default Home