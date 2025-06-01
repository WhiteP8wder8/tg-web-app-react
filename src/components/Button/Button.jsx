import React from 'react'

export function Button(props) {
  return (
    <div {...props} className={'button ' + props.className} ></div>
  )
}
