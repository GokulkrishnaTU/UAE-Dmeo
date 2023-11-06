import React from 'react'

function MIdSection() {
  return (

    <div className='bg-black '>

    <div className='bg-black   flex flex-col sm:flex-row gap-10 sm:gap-5 justify-between px-20'>
        <img src="assets/midimg.png" alt="" className='object-contain sm:object-cover flex-1 w-full' />
        <div className='flex flex-col justify-center items-start flex-1'>
        <h2  className='head-two'>Open Your Demo Account Instant</h2>
        <p className='para'>India's No.1 Leading Online ID Provider Get Your ID in Just 2 Mins. Join India's Most Affordable , Reliable & Trusted ID...</p>
        <img src="assets/whatsapp-.png" alt="" />
      </div>
    </div>
    <div className='h-[60px] flex justify-center items-center px-48 bg-black'>
      <hr className='w-full border-none bg-white h-px' />
    </div>


    <div className='bg-black   flex flex-col sm:flex-row gap-10 sm:gap-10 justify-center px-20'>
        <img src="assets/mid-sec-img.png" alt="" className='object-contain h-[400px]' />
        <div className='flex flex-col justify-center items-start'>
        <h2  className='head-two text-center'>Why choose Reddy Anna?</h2>
        <p className="text-white text-[15px] sm:text-[30px] text-center">
      <strong>&#x2713; Most Trusted Platform</strong><br />
      <strong>&#x2713; Fastest Reply Within 59 Seconds</strong><br />
      <strong>&#x2713; Anytime Instant Withdrawal</strong><br />
      <strong>&#x2713; 24x7 Customer Support</strong><br />
      <strong>&#x2713; 100% Transfer Accuracy</strong>
    </p>
      </div>
    </div>

    <div className='h-[60px] flex justify-center items-center px-48 bg-black'>
      <hr className='w-full border-none bg-white h-px' />
    </div>
<div className='flex justify-center items-center'>

    <img src="assets/bnr.png" alt="" />
</div>
    <div className='h-[60px] flex justify-center items-center px-48 bg-black'>
      <hr className='w-full border-none bg-white h-px' />
    </div>
    </div>
  )
}

export default MIdSection
