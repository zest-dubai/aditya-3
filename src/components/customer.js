import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link, Switch,Route} from 'react-router-dom'
import '../styles/login.css'

export class customer extends Component {
    userdata;
    constructor(props){
        super(props);
        let token1 =localStorage.getItem("token")
        let loggedIn=true
        let detaildone=false
        const token=localStorage.getItem("token")
        this.repFName=this.repFName.bind(this);
        this.repLName=this.repLName.bind(this);
        this.repEmail=this.repEmail.bind(this);
        this.repNumber=this.repNumber.bind(this);
        this.repAdress=this.repAdress.bind(this);
        this.  submitForm=this.  submitForm.bind(this);
       
        this.state={
            FName:"",
            LName:"",
            Email:"",
            MobileNo:"",
            Adress:"",
            loggedIn,
            detaildone,
            token1,
            type1:'text'
        }
        if(token==null){
            loggedIn=false
        }
    }
      repAdress(e){
        this.setState({Adress:e.target.value})
    }
      repFName(e){
        this.setState({FName:e.target.value})
    }
      repLName(e){
        this.setState({LName:e.target.value})
    }
      repEmail(e){
        this.setState({Email:e.target.value})
    }
      repNumber(e){
        this.setState({MobileNo:e.target.value})
    }
    componentDidMount(){
        this.userdata=JSON.parse(localStorage.getItem('currUser'));
        const token=localStorage.getItem("token")
        let loggedIn=true
        let detaildone=false
        if(token==null){
            loggedIn=false
        }
        if (localStorage.getItem('currUser')){
            this.setState({
                FName:this.userdata.FName,
                LName:this.userdata.LName,
                Email:this.userdata.Email,
                MobileNo:this.userdata.MobileNo,
                Adress:this.userdata.Adress,
                loggedIn,
                detaildone   
            })
        }else{
            this.setState({
                FName:"",
                LName:"",
                Email:"",
                MobileNo:"",
                Adress:"",
                loggedIn,
                detaildone
            })
        }
    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('currUser',JSON.stringify(nextState));
    }
      submitForm(e){
        e.preventDefault();
        const{FName,LName,EmailMobileNo,Adress,loggedIn,detaildone}=this.state
        if(FName && LName){
            localStorage.setItem("token2","abc")
            this.setState({
                detaildone:true
            })
        }
        }

    
    render() {
        if(this.state.token1 != "qwertyuiop")
    {
        return(
            <Redirect to="/"/>
        );
    } 
        if(this.state.detaildone){
            return<Redirect to="/selfie"/>
        }
        return (
            <div className='backgnd'>
                <div><b>Help us setup your account</b> <br/> We will verify it with your KYC documents</div>
                <h4></h4>
                <form onSubmit={this.submitForm}>
                    <input className="details" type="text" placeholder="Your Full Name" name="FName" value={this.state.FName} required onChange={this.  repFName}/><br/>
                    <input className="details" type={this.state.type1} placeholder="Date of Birth" onFocus ={() => {this.setState({type1:'date'})}} name="LName" value={this.state.LName}required onChange={this.  repLName}/><br/>
                    <input className="details" type="email" placeholder="Email Id" name="Email"value={this.state.Email} required onChange={this.  repEmail}/><br/>
                    <input className="details" type="number"placeholder="Mobile No."  required name="Number" value={this.state.Number} required onChange={this.  repNumber }/><br/>
                    <input className="details" type="text" placeholder="Address" name="Adress" value={this.state.Adress} required onChange={this.  repAdress}/><br/>
                    <p><b>Submitting it will lead to Upload Selfie page</b></p>
                    <input type="submit" placeholder='CONTINUE'/>
                </form>
                <Link to="/logout">LogOut</Link>
            </div>
        )
    }
}
export default customer