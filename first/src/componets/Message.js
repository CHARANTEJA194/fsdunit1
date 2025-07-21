import React, { Component } from 'react';
export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            Message : "thanks for wacthing our vedio"
        }
    }
        changeMessage(){
            console.log("button clicked");
            this.setState(
        {
        Message: "thanks for subcribing our channel "

    } );
};
    
    render(){
        return(
            <div>
                <h1>
                    {this.state.Message}
                </h1>
                <button onClick={()=>this.changeMessage()}>subcribe</button>


            </div>

        )
    }

}