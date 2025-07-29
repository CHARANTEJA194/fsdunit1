import React from 'react'

const Person = ({ person }) => {
  return (
    <p>
      Name: {person.personname}, Age: {person.age}
    </p>
  );
};


export default Person ;

