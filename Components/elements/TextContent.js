import React from 'react'

const TextContent = ({style, text}) => {
  return (
    <h1 className="text-content" style = {style}>{text}</h1>
  )
}

export default TextContent