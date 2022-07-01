import React from 'react'
import './LargeButton.css'

const LargeButton = ({style, text}) => {
  return (
    <div className = "button button-large" style = {style} >
        {text}
    </div>
  )
}

export default LargeButton