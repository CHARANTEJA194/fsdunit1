import React from 'react';
const head={
    fontSize : '72px',
    color : 'blue'
};

const Inlinecss = () => {
  return (
    <div>
        <h1 style={head}>inline</h1>
        <h1 className='error'>error</h1>
      
    </div>
  )
}

export default Inlinecss;
