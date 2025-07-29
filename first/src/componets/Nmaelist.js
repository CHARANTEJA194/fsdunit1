import React from 'react'
import Person from './Person';
const Nmaelist = () => {
    const name = ['charan','tej','amaravathi'];
    const person = [
        {
            id : 1,
            personname : "charan" ,
            age : 20

        },
          {
            id : 2,
            personname : "teja" ,
            age : 20

        },
          {
            id : 3,
            personname : "amaravathi" ,
            age : 20

        }
    ]
    const personlist =  person.map(person=> 
        < Person key={person.id}  person = {person} /> )
      
  return (
    <div>
    {name.map((name,index)  => (
        <h2> key ={index}, {name}</h2>
      ))}

      {/* You can also render person objects like this
      {/* {persons.map(person => (
        <p>
          Name: {person.personname}, Age: {person.age}
        </p> 
      ))} */}
      { personlist}
    
    </div>
  )
}

export default Nmaelist
