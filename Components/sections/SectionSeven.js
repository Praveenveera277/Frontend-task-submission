import React from 'react'
import './SectionSeven.css'
import TextContent from '../elements/TextContent'
import MediumButton from '../elements/MediumButton'

const SectionSeven = () => {
  return (
    <>
    <div className="section-seven">
      <TextContent 
        style = {{
          fontSize: '32px',
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'Reptile-Medium',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '134.8%',
          marginBottom: '15px',
        }}
        text = "Get your personalized period box"
      />
      <div className="ellipse"></div>
      <img className="period-box" alt="" src={require('../../images/period-box.png')} />
      <TextContent 
        style = {{
          width: '308px',
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '300',
          lineHeight: '206.5%',
          paddingLeft: '5px',
          marginBottom: '30px'
        }}
        text = "Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. "
      />
      <MediumButton className="medium-button"
        style = {{
          background: 'black',
          color: 'white',
          fontSize: '14px'
        }}
        text = "Create your box on the app"
      />
    </div>
    </>
  )
}

export default SectionSeven