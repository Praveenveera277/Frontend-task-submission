import React from 'react'
import './SectionThree.css'
import Content from '../elements/Content'
import TextContent from '../elements/TextContent'

const SectionThree = () => {
  return (
    <>
    <div className = "section-three">
        <TextContent 
          style = {{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '22px',
            lineHeight: '33px',
            color: '#1B1B50',
            paddingTop: '35px'
          }}
          text = "Liberate your everyday wellness"
        />
        <Content 
          heading = "Shop our self-care products"
          headingStyle = {{
            fontFamily: 'Reptile-Medium',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '32px',
            lineHeight: '134.8%',
            paddingTop: '10px',
            marginBottom: '20px'
          }}
          description = "Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get."
          descriptionStyle = {{
            position: 'absolute',
            width: '308px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '206.5%',
            top: '2735px'
          }}
          buttonText = "Upgrade your self-care"
          buttonStyles = {{
            position: 'absolute',
            background: 'linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)',
            filter: 'drop-shadow(0px 2px 6px rgba(255, 22, 64, 0.33))',
            color: 'white',
            fontSize: '19.8605px',
            top: '2900px'
          }}
        />
        <h1 className="hashtag"
          style = {{
            position: 'absolute',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '22px',
            lineHeight: '33px',
            color: 'rgba(0, 0, 0, 0.8)',
            top: '2980px',
            left: '53px'
          }}
          >#NoNasties, we promise!
          </h1>
       

    </div>
    <div className="product-container">
    <img className="self-care-product" alt="" src= {require("../../images/self-care-product.png")} />
    </div>
    </>
  )
}

export default SectionThree