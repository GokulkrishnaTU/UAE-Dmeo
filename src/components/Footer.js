import React from 'react'

function Footer() {
  return (

    <div className=' bg-black pb-20'>

    <div className='flex gap-10 sm:gap-0 flex-col sm:flex-row'>
      

      <div className='px-10 border-4 border-white flex flex-1 flex-col justify-center items-center gap-2'>

        <h2 className='footer-head'>
Anna Reddy ID</h2>
        <p className='footer-p'>Affordable & Reliable ID Since 2010. We are Providing Genuine & Authentic ID in Just 2 Min. Get Instant Approval..</p>

      </div>
      <div className='px-10 border-4 border-white  flex-1 flex flex-col justify-center items-center gap-2'>

        <h2 className='footer-head'>Get In Touch With Reddy Anna Customer Care</h2>
        <p className='footer-p'>For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7 With Our Online Services.</p>

      </div>
      <div className='px-10 border-4 border-white flex flex-1 flex-col justify-center items-center gap-2'>

        <h2 className='footer-head '>Security Info</h2>
        <p className='footer-p'>Safe & SecureBanking 10 Lac +Active Users</p>

      </div>
    </div>

    <p className='text-gray-600 px-14 pt-10 font-semibold'>KEYWORDS : <span className='text-pink-600'>Reddy Anna</span>, Reddy Anna ID, Reddy Anna Book, Reddy Anna Online Book, Reddy Anna Book Exchange </p>
    </div>
  )
}

export default Footer
