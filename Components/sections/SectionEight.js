import React from 'react'
import TextContent from '../elements/TextContent'
import './SectionEight.css'

const SectionEight = () => {
  return (
    <>
    <div className="section-eight">
      <div className="gradient"></div>
      <TextContent 
        style = {{
          fontSize: '35px',
          fontFamily: 'Reptile-Medium',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '134.8%',
          width: '274px'
        }}
        text = "With Diana, you’re in control of your health, your every day, and your story."
      />
     </div>
    </>
  )
}

export default SectionEight