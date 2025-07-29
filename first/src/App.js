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
import Nmaelist from './componets/Nmaelist';
import Stylesheet from './componets/Stylesheet';
import Inlinecss from './componets/Inlinecss';
import './appStyles.css';
import styles from './appStyle.module.css';
import From from './componets/From';
import LifecycleA from './componets/LifecycleA';
import Fragmentdemo from './componets/Fragmentdemo';
import Table from './componets/Table';

export default class App extends Component{
  render() {
   // const name = "charan";
   // const meassage = " hi this charan";
    return (
      
      
      <div>
        <Fragmentdemo/>
        <Table/>
        
        {/* <LifecycleA />  */}
        {/* <From/> */}
      {/* //   <h1 className='error'>error</h1>
      //   <h1 className={styles.success}>success</h1> */}
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
        <Eventbind /> 
        <Conditionalrendering /> 
        <Nmaelist/>*/}
        {/* // <Stylesheet  primary ={true}/>
        // <Inlinecss />  */}
      


       

        
      </div>
    );
  }
}



