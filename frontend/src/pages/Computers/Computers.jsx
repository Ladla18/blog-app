import React from 'react'
import "./Computers.css"
import RightPart from '../../components/RightPart/RightPart'
import Categorycards from '../../components/Categorycards/Categorycards'
function Computers() {
  const compTags = []
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 mt-5">
        <h3>Computer Section</h3>
        <div className="row mt-2">
         <div className="col-6 col-lg-3">
         <Categorycards cardButton="More Info" cardImg="public/computer/Gemini_Generated_Image_22pfco22pfco22pf.jpeg" cardTitle="Intel Computers"/>
         </div>
         <div className="col-6 col-lg-3">
         <Categorycards cardButton="More Info" cardImg="public/computer/amd-pc-1-tech-pc-7-techpc7.in_.jpg" cardTitle="AMD Computers"/>
         </div>
         <div className="col-6 col-lg-3">
         <Categorycards cardButton="More Info" cardImg="public/computer/Gemini_Generated_Image_8ercdv8ercdv8erc.jpeg" cardTitle="Ryzen Computers"/>
         </div>
         <div className="col-6 col-lg-3">
         <Categorycards cardButton="More Info" cardImg="public/computer/61+-htrmJmL._AC_UF1000,1000_QL80_.jpg" cardTitle="Gaming Computers"/>
         </div>
         <div className="col-6 col-lg-3">
         <Categorycards cardButton="More Info" cardImg="public/computer/images.jpeg" cardTitle="Editing Computers"/>
         </div>
        
        </div>
        </div>
        <div className="col-sm-3">
          <RightPart postTags={compTags}/>
        </div>
      </div>
    </div>
  )
}

export default Computers