import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({dogNames}) => {
  const dogMenu = dogNames.map(dog => (
    <Link to={`/dogs/${dog}`}>{dog}</Link>))
  
  return (
    <>
      <Link to="/dogs">Home</Link>
      {dogMenu}
    </>
  )
}

export default Nav