import React from 'react'
import './SectionSix.css'
import Content from '../elements/Content'

const SectionSix = () => {
  return (
    <>
    <div className = "section-six">
        <Content
          heading = "Consult with wellness experts"
          headingStyle = {{
            fontFamily: 'Reptile-Medium',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '32px',
            lineHeight: '134.8%',
            marginTop: '-30px'
          }}
          description = "Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you."
          descriptionStyle = {{
            width: '308px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '206.5%',
            marginTop: '25px',
            marginBottom: '10px'
          }}
          buttonStyles = {{
            background: 'linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)',
            boxShadow: '0px 2px 16px rgba(71, 222, 255, 0.33)',
            color: 'white',
            fontSize: 19.68,
            marginTop: '20px',
            marginBottom: '-20px'
          }}
          buttonText = "Get a consultation"
        />
    </div>
    <div className="consultant-container">
    <img className="consultant" alt="" src= {require("../../images/consultant.png")} />
    </div>
    </>
  )
}

export default SectionSix