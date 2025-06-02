import React from 'react'
import './Button.css';

export function Button(props) {
  return (
    <div {...props} className={'button ' + props.className} ></div>
  )
}
