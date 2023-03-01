import React, {Component} from "react"
// import { Link } from "react-router-dom"

import axios from "axios"
import {SERVER_HOST} from "../config/global_constants"  

import CarTable from "./CarTable"
import UserProfile from "./UserProfile"
import '../css/style.css'

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
    {
        axios.get(`${SERVER_HOST}/carParts`)
            .then(res => {
                if (res.data) {
                    if (res.data.errorMessage) {
                        console.log(res.data.errorMessage)
                    }
                    else {
                        console.log("Records read")
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
            <div className="form-container">
                <div className="table-container">
<<<<<<< HEAD
                    <UserProfile/>
                    <CarTable cars={this.state.cars} /> 
=======
                    <CarTable cars={this.state.carParts} /> 
>>>>>>> b2d6bbf50e9ca400b8d05df16ba20f4ea6c8fccc
                </div>
            </div> 
        )
    }
}