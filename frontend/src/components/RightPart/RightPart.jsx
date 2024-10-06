import React from 'react'
import Tags from '../../components/Tags/Tags'
import SearchBar from '../../components/SearchBar/SearchBar'
import SocialBar from '../../components/SocialBar/SocialBar'
import LatestPost from '../../components/LatestPost/LatestPost'
import Newsletter from '../../components/Newsletter/Newsletter'
function RightPart({postTags}) {
  return (
    <>
    <div className="row me-5 ms-3">
            <SearchBar />
          </div>
          <div className="row mt-4 mx-2">
            <h4 >Follow Us</h4>
            <SocialBar socialName="FACEBOOK" classProp="bg-primary text-light rounded-0 border-0 btn w-100" />
            <SocialBar socialName="YOUTUBE" classProp="bg-danger text-light rounded-0 border-0 btn w-100" />
            <SocialBar socialName="INSTAGRAM" classProp="bg-warning text-light rounded-0 border-0 btn w-100" />
          </div>
          <div className='mt-3 mx-4'>
            <h4>Latest Updates</h4>
            <LatestPost image="public/images/three.jpg" info="This is the new Era of technlogy This is the new Era of technlogy" date="10-02-2003" />
            <LatestPost image="public/images/one.jpg" info="This is the new Era of technlogy" date="10-02-2003" />
            <LatestPost image="public/images/two.jpeg" info="This is the new Era of technlogy" date="10-02-2003" />
            <LatestPost image="public/images/four.jpg" info="This is the new Era of technlogy" date="10-02-2003" />
          </div>

          <div className='mt-4 mx-4'>
            <Tags tags={postTags} />
          </div>
          <div className='mt-5 mx-4'>
            <Newsletter />
          </div>
    </>
  )
}

export default RightPart