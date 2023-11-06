import React from 'react'
import './style.css'

function Hero() {
  return (
    <div className='main h-[500px] flex flex-col sm:flex-row justify-between px-20 py-10'>

      <img src="assets/maun-removebg-preview.png" alt="" />

        <div className='flex flex-col justify-centers items-start sm:items-center'>
        <h2  className='head-two'>Genuine Online id</h2>
        <h3 className='head-three'>Reddy ID</h3>
        <p className='para'>Reddy is the Best ID Service Provider in India . Get India's Genuine ID. Reddy Anna</p>
        <img src="assets/whatsapp-.png" alt="" />
      </div>


      
    </div>
  )
}

export default Hero
