import React, { Component } from 'react'
import Greeting from './componets/Greeting';
import Greet from './componets/greet';
import Hobbies from './componets/Hobbies';
import Para from './componets/para';
import Message from './componets/Message';
import Skill from './componets/Skill';
import Personal from './componets/Personal';
import Wishme from './componets/Wishme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Eventbind from './componets/Eventbind';
import Conditionalrendering from './componets/Conditionalrendering';

export default class App extends Component{
  render() {
   // const name = "charan";
   // const meassage = " hi this charan";
    return (
      <div>
       {/* <Greeting/>
        <Greet name = " charan "  city = " kadapa" children = " action"/>
        <Greet name = " teja"  city = " chennur " children = " retake" />
        <Hobbies />
        <Hobbies name = " charan "  city = " kadapa" />
        <Hobbies name = {name} city ={meassage}/> 
        //  using the const variables above to acsses the name and message given here . //
        <Para />
        <Message />
        <Skill/>
        <Personal/> 
        <Button variant="primary">Primary</Button>
        <Wishme />
        <Button > primary</Button> 
        <Eventbind /> */}
        <Conditionalrendering />


       

        
      </div>
    );
  }
}



