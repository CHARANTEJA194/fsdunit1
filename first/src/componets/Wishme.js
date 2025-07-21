import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wishme = () => {
    const [count, setcount] = useState(0);
    const increasevalue = () =>{
        setcount( count + 1);
    }
    const decreasingvalue = ()=>{
        setcount( count - 1);
    }
  return (
    <div>
      <h1> hi {count} times </h1>
      <Button onClick={increasevalue}>increase</Button>
      <Button onClick={decreasingvalue}>decrease</Button>
      {/*<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    */}
    </div>
  );
}

export default Wishme;
