import React, {Component} from "react"

import CarTable from "./CarTable"
import axios from "axios"

import Navbar from "./Navbar"
import {SERVER_HOST} from "../config/global_constants"
import Sidenav from "./SideNav"


export default class DisplayAllCars extends Component 
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            carParts:[]
        }
    }
    
    
   
    componentDidMount() 
    {  console.log("cOMPONANT");
        axios.get(`${SERVER_HOST}/cars`)

            .then(res => {
              
                if (res.data) {
                    if (res.data.errorMessage) {
                        console.log(res.data.errorMessage)
                    }
                    else {
                        console.log("Records read")
                        console.log(res.data)
                        this.setState({ carParts: res.data })
                        console.log(res.data)
                    }
                }
                else {
                    console.log("Record not found")
                }
            })
    }
  
    render() 
    {   
        return (        
            
            <div className="navbarBottom">
                <Navbar Navbar={this.state.Navbar} /> 

                <div className="sidenav">
                <Sidenav Sidenav={this.state.Sidenav} /> 


            <div className="form-container">
                <div className="table-container">
                    <CarTable cars={this.state.carParts} /> 
                </div>
            </div> 
             </div> 
             </div> 
        )
    }
}