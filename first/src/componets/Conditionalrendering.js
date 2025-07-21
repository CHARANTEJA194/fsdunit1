import React, { Component } from 'react'

export default class Conditionalrendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div> this is ture only </div>
    // above one is shortcircuit approch only if ture it retuns else it returns nothing 
    // trinry conditoional operator .
    // return this.state.isLoggedIn?( <div>is true message </div>): (<div>is the flase message </div>)
    // second way variables 
//     let Message 
//    if(this.state.isLoggedIn){
//         Message = <div>it is ture message </div>
//     }
//     else {
//         Message = <div> this is flase meassage</div>
//     }
//     return Message ;

    // first way:
    // if(this.state.isLoggedIn){
    //     return <div>it is ture message </div>
    // }
    // else {
    //     return <div> this is flase meassage</div>
    // }

  
  }
}
