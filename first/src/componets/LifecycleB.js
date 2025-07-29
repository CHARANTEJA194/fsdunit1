import React, { Component } from 'react'


export default class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name : 'charan'
      }
      console.log("constrotorb")
    }
static getDervidesstateFromprops(){
    console.log("getb")
    return null 
}
componentDidMount(){
    console.log("didmountb")
    }
shouldComponentUpdate(){
    console.log('shouldb')
    return true
}
getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log('sanpshoutb')
    return null

}
componentDidUpdate(){
    console.log("didupdateb") 
}

    
  render() {
     console.log("renderb")
    return (
      <div>
        lifecycle B
      </div>
    )

  }
}
