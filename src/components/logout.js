import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'

export default class logout extends Component {
    constructor(props){
        let token = localStorage.getItem("token");
        super(props)
        this.state = { token };
    }
    render() {
        localStorage.removeItem("token")
        if(this.state.token != "qwertyuiop")
        {
            return(
                <Redirect to="/"/>
            );
        } 
        return (
            <div className='backgnd'>
                <h1>You have been Logged Out.</h1>
                <h2>Sorry, your details could not be submitted</h2>
                <Link to="/">Login Again</Link>
            </div>
        )
    }
}