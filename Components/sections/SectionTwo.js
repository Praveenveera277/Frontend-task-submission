import React from 'react'
import './SectionTwo.css';
import TextContent from '../elements/TextContent'
import Bullet from '../elements/Bullet'

const SectionTwo = () => {
  return (
    <div className="section-two">
      <TextContent 
          style = {{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '22px',
            lineHeight: '33px',
            color: '#1B1B50',
            paddingTop: '39px'
          }}
          text = "What makes us different?"
      />

      <TextContent 
          style = {{
            fontFamily: 'Reptile-Medium',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '32px',
            lineHeight: '134.8%',
            color: '#1B1B50',
            paddingTop: '30px'
          }}
          text = "Reimagining and rewiring self-care"
      />

      <div className="paragraph">
      <TextContent 
          style = {{
            width: '308px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '180%',
            color: '#1B1B50',
            paddingTop: '5px'
          }}
          text = "You care about conscious consumption, and so do we."
      />

      <TextContent 
          style = {{
            width: '308px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '180%',
            color: '#1B1B50'
          }}
          text = "When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best"
      />

      <TextContent 
          style = {{
            width: '308px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '180%',
            color: '#1B1B50'
          }}
          text = "We collaborate with researchers and doctors to"
      />

      <Bullet 
        text1 = "Help you get granular about your health and self-care with personalized insights, and"
        style1 = {{
          width: '308px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '180%',
          color: '#1B1B50',
          display: 'list-item',
          paddingLeft: '20px'
        }}
        text2 = "Equip you with simple, sustainable products that get the job done"
        style2 = {{
          width: '308px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '180%',
          color: '#1B1B50',
          display: 'list-item',
          paddingLeft: '20px'
        }}
      />

      <TextContent 
        style = {{
          width: '308px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '180%',
          color: '#1B1B50'
        }}
        text = "No to-the-moon-and-back claims in this neck of the woods."
      />

      <TextContent 
        style = {{
          width: '308px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '180%',
          color: '#1B1B50'
        }}
        text = "We’re just solving real problems for real people here. "
      />
      </div>
    </div>
  )
}

export default SectionTwo