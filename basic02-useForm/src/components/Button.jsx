import React from 'react'
import {MdMessage} from 'react-icons/md'

function Button(props) {
  return (
    <button className={`${props.css}`} {...props}>
         {props.icon}       
        {props.text}
    </button>
  )
}

export default Button