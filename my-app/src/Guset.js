import React, { Component } from "react";

export default class Guest extends Component{

    render(){
        let style={
            'color':"red",
            "backgroundcolor":"yellow"
        }
        let style1={

            "color":"blue",
            "backgroundcolor":"black"
        }
        return (
            <div>
                <h1>Welcome Guest</h1>
                <button style={style}>Login</button>
                <button  style={style1}>SignUp</button>
            </div>
        )
    }
}