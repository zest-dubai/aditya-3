import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/login.css'
export default class login extends Component {
    constructor(props){
        super(props)
        let loggedIn=false
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        localStorage.removeItem("token")
        localStorage.removeItem("currUser")
        localStorage.removeItem("token2")
        localStorage.removeItem("tokenS")
        localStorage.removeItem("img")
        localStorage.removeItem("img1")
        localStorage.removeItem("img2")
        localStorage.removeItem("img3")
        localStorage.removeItem("t1")

        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const{username,password}=this.state
        if(username==="satyam"&& password==="test123"){
            localStorage.setItem("token","qwertyuiop")
            this.setState({
                loggedIn:true
            })
        }
        if(username==="aditya"&& password==="test123"){
            localStorage.setItem("token","qwertyuiop")
            this.setState({
                loggedIn:true
            })
        }
    }
    render() {
        if(this.state.loggedIn){
            return<Redirect to="/customer"/>
        }
        return (
            <div className="backgnd">
                <h2 style={{textAlign: 'center'}}>Hi! Welcome to ZestMoney</h2>
                <h2 style={{textAlign: 'center', color: "green"}}>One-stop KYC solution</h2>
                <br/>
                
                <form onSubmit={this.submitForm}>
                    <input className="details" type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.onChange}/>
                    <br/>
                    <input className="details" type="password" placeholder="Password" name="password"value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}