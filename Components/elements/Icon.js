import React from 'react'
import './Icon.css'

const Icon = ({imgSource}) => {
  return (
    <img className="icon" alt="" src={require(imgSource)} />
  )
}

export default Icon




