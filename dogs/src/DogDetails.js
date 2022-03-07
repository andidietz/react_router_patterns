import React from 'react'
import {Redirect, useParams} from 'react-router-dom'

const DogDetails = ({dogs}) => {
  const {name} = useParams()
  let dog;

  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].name === name) {
      dog = dogs[i]
    }
  }

  if (dog === undefined) {
    return <Redirect to='dogs'/>
  }
  
  const {age, src, facts} = dog

  const dogFacts = facts.map(fact =>
    <li>{fact}</li>
  )
      
  return (
    <>
      <img src={src}></img>
      <h1>{name}</h1>
      <p>{age}</p>
      <ul>
        {dogFacts}
      </ul>
    </>
  )
}

export default DogDetails