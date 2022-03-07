import React from 'react'
import { Link } from 'react-router-dom'

const DogList = ({dogs}) => {
  const dogImages = dogs.map(dog => {
    return (            
    <div>
      <img src={dog.src}></img>
      <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
    </div>
    )
  })
  
  return (
    <>
      {dogImages}
    </>
  )
}

export default DogList