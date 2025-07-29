import React, { Component } from 'react'

export default class From extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Username :'',
         Comment : '' ,
         Topic : 'react',
         
      }
    }
handleusernamechange =  (Event)=> {
    this.setState({
        Username:Event.target.value

        } )
    }
    handlecommenrchange = (Event)=> {
      this.setState({
        Comment:Event.target.value
      })
    }
    handeltopicchange =(Event) => {
      this.setState({
        Topic:Event.target.value 
      })
    }
    handleSubmit =(Event)=> {
      alert(`${this.state.Username}, ${this.state.Comment}, ${this.state.Topic}`)
    }


    
  render() {



    return (
      <from onSubmit = {this.handleSubmit} >
        <div>
        <label>Username</label>
        <input type='text' value = {this.state.Username} onChange={this.handleusernamechange}></input>

        <label>comment</label>
        <input type ='text' value = {this.state.Comment}onChange={this.handlecommenrchange} />
        <label>topic</label>
        <select value = {this.state.Topic}onChange={this.handeltopicchange }>
          <option value = 'react'>react</option>
          <option value = 'java '>java</option>
          <option value = 'python'>python</option>
        
        </select>
         </div>
         <button type = 'submit' onClick={this.handleSubmit}>submit</button>
      </from>
    )
  }
}
