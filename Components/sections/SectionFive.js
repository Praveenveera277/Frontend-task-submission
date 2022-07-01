import React from 'react'
import './SectionFive.css'
import Content from '../elements/Content'

const SectionFive = () => {
  return (
    <>
    <div className = "section-five">
    <Content
        heading = "Track your period"
        headingStyle = {{
          fontFamily: 'Reptile-Medium',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '32px',
          lineHeight: '134.8%',
          marginBottom: '20px'
        }}
        description = "Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data."
        descriptionStyle = {{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '206.5%',
          marginBottom: '40px'
        }}
        buttonStyles = {{
          background: 'linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)',
          filter: 'drop-shadow(0px 2px 6px rgba(255, 22, 64, 0.33))',
          color: 'white',
          fontSize: 19.68,
        }}
        buttonText = "Track your period on the app"
    />        
    </div>
    <div className="menstrual-calendar-container">
    <img className="menstrual-calendar" alt="" src= {require("../../assets/images/menstrual-calendar.png")} />
    </div>
    </>
  )
}

export default SectionFive