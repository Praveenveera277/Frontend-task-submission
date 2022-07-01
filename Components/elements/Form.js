import React from 'react'
import SmallButton from './SmallButton'
import './Form.css'

const Form = ({placeholder}) => {
  return (
    <div className="input-form">
    <form>
        <input type="text" id="inputbox" placeholder={placeholder}/>
    </form>
    <SmallButton 
        style = {{
          background: '#D6F4FB',
          border: '1.2782px solid #E9F4FF',
          color: '#1B1B50'
        }}
        text = "Activate"
      />
    </div>
  )
}

export default Form