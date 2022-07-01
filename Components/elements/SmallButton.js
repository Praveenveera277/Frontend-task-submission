import React from 'react'
import './SmallButton.css'

const SmallButton = ({style, text}) => {
  return (
    <div className = "button button-small" style = {style} >
      <img alt="" src={require("../../icons/mail.png")} />
      {text}
    </div>
  )
}

export default SmallButton