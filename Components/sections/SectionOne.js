import React from 'react'
import TextContent from '../elements/TextContent'
import './SectionOne.css'
import Divider from '../elements/Divider'

const SectionOne = () => {
  return (
    <div className="section-one">
      <TextContent
        style ={{
          fontFamily: 'Reptile-Medium',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '33px',
          lineHeight: '30px',
          color: '#1B1B50',
          marginBottom: '-30px'         
        }}
        text = "About Diana"
      />

      <TextContent
        style ={{
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '22px',
          color: 'black',
          marginBottom: '-30px'   
        }}
        text = "A platform that looks out for you" 
      />  

      <div className="align-left">
      <TextContent
        style ={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '179%',
          color: '#1B1B50'  
        }}
        text = "Diana empowers you to understand how your body works so you can look and feel your best." 
      />   
      </div>

      <Divider
        style = {{
          width: '297px',
          border: '0.5px solid black',
          marginTop: '-50px',
          marginBottom: '-40px'
        }}
      />

      <TextContent
        style ={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '22px',
          lineHeight: '33px',
          color: '#1B1B50',
          marginTop: '-10px'
        }}
        text = "Our Philosophy" 
      /> 

      <TextContent
        style ={{
          width: '303px',
          fontFamily: 'Reptile-Medium',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '35px',
          lineHeight: '134.8%',
          color: '#1B1B50',
          marginTop: '-40px'
        }}
        text = "Sustainable wellness is a big-picture, inside out approach" 
      />  

      <TextContent
        style ={{
          width: '308px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '179%',
          color: '#1B1B50',
          marginTop: '-45px'
        }}
        text = "Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness." 
      />    
        
      <TextContent
        style ={{
          width: '308px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '179%',
          color: '#1B1B50',
          marginTop: '-50px',
          marginBottom: '-50px'
        }}
        text = "That’s why we’ve created an integrated ecosystem of:" 
      />

      <img alt="" src = {require('../../icons/formula.png')} />
            
      <TextContent
        style ={{
          width: '308px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '179%',
          color: '#1B1B50',
          marginTop: '-40px',
          marginBottom: '-30px'
        }}
        text = "Consciously formulated products that deliver feel-good results fast " 
      />

      <img alt="" src = {require('../../icons/sparkle.png')} />
            
      <TextContent
        style ={{
          width: '308px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '179%',
          color: '#1B1B50',
          marginTop: '-40px',
          marginBottom: '-30px'
        }}
        text = "In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body" 
      />

      <img alt="" src = {require('../../icons/phone-call.png')} />
            
      <TextContent
        style ={{
          width: '308px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '179%',
          color: '#1B1B50',
          marginTop: '-40px'
        }}
        text = "In-app consultation portals that connect you with compassionate wellness experts" 
      />


      <TextContent
        style ={{
          width: '308px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '179%',
          color: '#1B1B50',
          marginTop: '-40px'
        }}
        text = "Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday." 
      />
      
    </div>
  )
}

export default SectionOne