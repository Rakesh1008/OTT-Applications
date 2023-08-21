import React from 'react'
import HeroBanner from './heroBanner/heroBanner'
import "./style.scss"

function home() {
  return (
    <div className='homepage'>
      <HeroBanner/>
    </div>
  )
}

export default home