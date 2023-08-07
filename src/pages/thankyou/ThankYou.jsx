import React from 'react'
import Tick from "./tick.png"
import './ThankYou.css'

function ThankYou() {
  return (
    <div className='content_1'>
      <h1>THANK YOU!</h1>
      <img src={Tick} className="tick" />
      <p className='pbt1'>Thank you so much for your valuable vote.</p>
      <p className='pbt2'>Electronic voting system</p>
    </div>
  )
}

export default ThankYou