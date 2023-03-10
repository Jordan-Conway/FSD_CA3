import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./css/style.css"

import DisplayAllCars from "./components/DisplayAllCars"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Sidenav from "./components/SideNav"
import EditCarPart from "./components/EditCarPart"
import DeleteCarPart from "./components/DeleteCarPart"
import UserProfile from "./components/UserProfile"
import AddCarPart from "./components/AddCarPart"
import DisplayAllCars from "./components/DisplayAllCars"
// import ResetDatabase from "./components/ResetDatabase"

// import Login from "./components/Login"
// import Logout from "./components/Logout"
// import LoggedInRoute from "./components/LoggedInRoute"


import {ACCESS_LEVEL_GUEST} from "./config/global_constants"

if (typeof localStorage.accessLevel === "undefined")
{
    localStorage.name = "GUEST"
    localStorage.accessLevel = ACCESS_LEVEL_GUEST
    localStorage.token = null
    localStorage.profilePhoto = null
}


    
export default class App extends Component 
{
    render() 
    {
        return (

            
            <BrowserRouter>
            
                <Switch>
                <Route exact path="/Navbar" component={Navbar} />
                <Route exact path="/Sidenav" component={Sidenav} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/AddCarPart" component={AddCarPart} />
                    <Route exact path="/EditCarPart/:id" component={EditCarPart} />
                    <Route exact path="/DeleteCarPart/:id" component={DeleteCarPart} />
                    <Route exact path="/UserProfile" component={UserProfile}/>
                    {/* <Route exact path="/ResetDatabase" component={ResetDatabase} />                     */}
                    <Route exact path="/" component={DisplayAllCars} />                       
                </Switch>
            </BrowserRouter>
        )
    }
}