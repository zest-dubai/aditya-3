import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { convertHexToRGB } from 'material-ui/utils/colorManipulator';


export default class CamErr extends Component {
    constructor(props){
        let token = localStorage.getItem("token");
        let tokenC = localStorage.getItem("token2");
        let tokenS = localStorage.getItem("tokenS");
        let tokenG = localStorage.getItem("tokenG");

        let ta = localStorage.getItem("t1");
        super(props)
        this.state = {
             token , ta, tokenC, tokenS, tokenG
        };
        
    }
    render() {
        if(this.state.token != "qwertyuiop")
        {
            return(
                <Redirect to="/"/>
            );
        } 
        if(this.state.ta === "e1"){
            return (
            <div className='backgnd'>              
                <h1><b>Error: Camera permission denied</b> </h1>
                <br/>
                <h3>Go to your site settings and allow camera permission, else you cannot proceed further</h3> 
                <br/>
                <Link className='' to="/selfie"><h3>Back to Selfie screen</h3></Link>
                <h3>Link will work only when camera access is granted </h3>
                
            </div>
        );
        }
        if(this.state.ta === "e2"){
            return (
            <div className='backgnd'>              
                <h1 style={{color: "red" }}><b>Error: Camera permission denied</b> </h1>
                <br/>
                <h3>Go to your site settings and allow camera permission, else you cannot proceed further</h3> 
                <br/>
                <Link className='' to="/gid"><h3>Back to Government ID screen</h3></Link>
                <h3>Link will work only when camera access is granted </h3>
                
            </div>
        );
        }
        if(this.state.tokenC != "abc")
        {
            return(
                <Redirect to="/customer"/>
            );
        }
        if(this.state.tokenS != "abc")
        {
            return(
                <Redirect to="/selfie"/>
            );
        }
        if(this.state.tokenG != "zbc")
        {
            return(
                <Redirect to="/gid"/>
            );
        }
        else{
            return(
                <Redirect to='/customer'/>
            );
        }
    }
}