import React, { Component } from 'react'

export default class Hobbies extends Component {
  render() {
    return (
      <div>
        <p> this are my hobbies </p>
        <h1> this are my hobbies {this.props.name}
           {this.props.city}
        </h1>
      </div>
    );
  }
}
