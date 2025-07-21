import React, { Component } from 'react'

export default class Eventbind extends Component {
    constructor() {
      super()
    
      this.state = {
         Message: " hello" // this.cliclhandler = this.click handler.bind(this) //
      }
    }
    Clickhandler (){
        this.setState (
             {
            Message : "good bye"
        }
         )
    }

    
  render() {
    return (
      <div>
        <h1>
            {this.state.Message}
            </h1>
        <button onClick={ this.Clickhandler.bind(this)}>click this button to change message </button> 
        {/*this can be arrow function like in Message file and {this.clickhandler()if we add commected statemet} */ }
      </div>
    )
  }
}
