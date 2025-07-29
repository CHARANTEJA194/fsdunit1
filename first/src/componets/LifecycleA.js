import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name : 'charan'
      }
      console.log("constrotorA")
    }
static getDervidesstateFromprops(){
    console.log("getA")
    return null
}
componentDidMount(){
    console.log("didmountA")
    }

shouldComponentUpdate(){
    console.log('shouldA')
    return true
}
getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log('sanpshoutA')
    return null

}
componentDidUpdate(){
    console.log("didupdateA")
}
change = (Event) => {
    this.setState({
        Name : Event.target.value
    })
}
  render() {
    console.log("rendera")
    return (
      <div>
        lifecycle A
        <button onClick={this.change}>change</button>
        <LifecycleB />
      </div>
    )

  }
}
