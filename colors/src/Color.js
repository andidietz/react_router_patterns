import React from 'react'
import {Link} from 'react-router-dom'

const Color = ({color}) => {
  return (
    <div style={{backgroundColor: color}}>
      <h2>{color}</h2>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Color