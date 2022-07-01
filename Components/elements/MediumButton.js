import React from 'react'
import './MediumButton.css'

const MediumButton = ({style, text}) => {
  return (
    <div className = "button button-medium" style = {style} >
        <div>
        <h4 id="button-text">{text}</h4>
        </div>
        <img className="right-icon" alt="" src={require("../../icons/chevron-right-medium.png")} />
    </div>
  )
}

export default MediumButton