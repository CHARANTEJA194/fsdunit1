import React from 'react'
import './mystyles.css'

const Stylesheet = (props) => {
     let className = props.primary ? "primary" : ""
  return (
    <div>
        <h1 className={`${className} font-size`}> stylee sheet </h1>
      
    </div>
  )
}

export default Stylesheet;
