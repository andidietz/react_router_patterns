import React from 'react'
import {Link} from 'react-router-dom'

const Color = ({color}) => {
  return (
    <div style={{backgroundColor: color}}>
      <h2>{color}</h2>
      <p>
      <Link to="/">Home</Link>
      </p>
    </div>
  )
}

export default Color