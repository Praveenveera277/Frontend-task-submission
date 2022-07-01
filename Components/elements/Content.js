import React from 'react'
import TextContent from './TextContent'
import LargeButton from './LargeButton'

function Content({heading, headingStyle, description, descriptionStyle, buttonText, buttonStyles}) {
  return (
    <>
    <TextContent 
          style = {headingStyle}
          text = {heading}
        />
        <TextContent 
          style = {descriptionStyle}
          text = {description}
        />
        <LargeButton 
          style = {buttonStyles}
          text = {buttonText}
        />
    </>
  )
}

export default Content