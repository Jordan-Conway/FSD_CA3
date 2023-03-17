import React, {Component} from "react"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"

import LinkInClass from "../components/LinkInClass"
import Register from "../components/Register"
import {SERVER_HOST} from "../config/global_constants"


export default class Login extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            email:"",
            password:"",
            isLoggedIn:false
        }
    }
    
    
    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }
    
    
    handleSubmit = (e) => 
    {
        axios.post(`${SERVER_HOST}/users/login/${this.state.email}/${this.state.password}`)
        .then(res => 
        {     
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else // user successfully logged in
                { 
                    console.log("User logged in") 
                    
                        localStorage.name = res.data.name
                    localStorage.accessLevel = res.data.accessLevel
                    localStorage.profilePhoto = res.data.profilePhoto                        
                    localStorage.token = res.data.token
                    
                    
                    this.setState({isLoggedIn:true})
                }        
            }
            else
            {
                console.log("Login failed")
            }
        })                
    }


    render()
    {            
        return (
            <div className="Login">
                <h1>DealsOnWheels.com</h1>
                <div classname="login-background">

        
            <form className="login-container" noValidate = {true} id = "loginOrRegistrationForm">
                <h2>Sign In</h2>
            
                {this.state.isLoggedIn ? <Redirect to="/DisplayAllCars"/> : null} 
                <div className="loginContainer">
                <input 
                    type = "email" 
                    name = "email" 
                    placeholder = "Email"
                    autoComplete="email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                /><br/>
                    
                <input 
                    type = "password" 
                    name = "password" 
                    placeholder = "Password"
                    autoComplete="password"
                    value={this.state.password} 
                    onChange={this.handleChange}
                /><br/><br/>
              
                <LinkInClass value="Login" className="login-button" onClick={this.handleSubmit}/> 
                <Link className="cancel-button" to={"/DisplayAllCars"}>Cancel</Link>  
                <br/><br/>
                <h6>Dont Have a account yet? Create one here</h6> 
                <Link className="register-button" to={"/Register"}>Register
          </Link>{" "}
                </div>  
                                                 
            </form>

            </div>
              </div>
        )
    }
}