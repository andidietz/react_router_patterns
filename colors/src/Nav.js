import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = ({colors}) => {
  const colorNames = Object.keys(colors)
  const colorMenu = colorNames.map(color => (
    <NavLink to={`/colors/${color}`}>{color}</NavLink>
  ))

  return (
    <nav>
      <NavLink exact to='/colors'/>
      {colorMenu}
    </nav>
  )
}

export default Nav