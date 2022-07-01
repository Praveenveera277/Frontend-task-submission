import React from 'react'
import './Bullet.css'

const Bullet = ({style1, text1, style2, text2}) => {
  return (
    <ul className="bullets">
        <li style = {style1}>{text1}</li>
        <li style = {style2}>{text2}</li>
    </ul>
  )
}

export default Bullet