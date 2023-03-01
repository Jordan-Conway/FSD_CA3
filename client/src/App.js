import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./css/style.css"

import Navbar from "./components/Navbar"

import Register from "./components/Register"
// import ResetDatabase from "./components/ResetDatabase"
import Login from "./components/Login"
import Logout from "./components/Logout"


import DisplayAllCars from "./components/DisplayAllCars"
import LoggedInRoute from "./components/LoggedInRoute"


// import {ACCESS_LEVEL_GUEST} from "./config/global_constants"



// if (typeof localStorage.accessLevel === "undefined")
// {
//     localStorage.name = "GUEST"
//     localStorage.accessLevel = ACCESS_LEVEL_GUEST
//     localStorage.token = null
//     localStorage.profilePhoto = null
// }


    
export default class App extends Component 
{
    render() 
    {
        return (

            
            <BrowserRouter>
            
                <Switch>
                <Route exact path="/Navbar" component={Navbar} />
                <Route exact path="/Register" component={Register} />
                    {/* <Route exact path="/ResetDatabase" component={ResetDatabase} />                     */}
                    <Route exact path="/" component={DisplayAllCars} />
                    <Route exact path="/Login" component={Login} />
                    <LoggedInRoute exact path="/Logout" component={Logout} />
                    <Route exact path="/DisplayAllCars" component={DisplayAllCars}/> 
                    <Route path="*" component={DisplayAllCars}/>                            
                </Switch>
            </BrowserRouter>
        )
    }
}