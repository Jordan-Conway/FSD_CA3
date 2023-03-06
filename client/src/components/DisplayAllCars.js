import React, {Component} from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import {SERVER_HOST} from "../config/global_constants"  

import CarTable from "./CarTable"
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
                    <CarTable cars={this.state.carParts} /> 
                </div>
                <div className="add-new-car">
                                <Link className="blue-button" to={"/AddCarPart"}>Add New Car</Link>
                            </div>
            </div> 
        )
    }
}