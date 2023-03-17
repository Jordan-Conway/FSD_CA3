import React, { Component } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import {SERVER_HOST} from "../config/global_constants"

export default class CarPartCard extends Component {

    // componentDidMount() 
    // {
    //     this.props.carParts.photos.map(photo => 
    //     {
    //         return axios.get(`${SERVER_HOST}/carParts/photos/${photo.filename}`)
    //         .then(res => 
    //         {
    //             if(res.data)
    //             {            
    //                 if (res.data.errorMessage)
    //                 {
    //                     console.log(res.data.errorMessage)    
    //                 }
    //                 else
    //                 {           
    //                     document.getElementById(photo._id).src = `data:;base64,${res.data.image}`                                                         
    //                 }   
    //             }
    //             else
    //             {
    //                 console.log("Record not found")
    //             }
    //         })
    //     })
    // }
    
    render() {
        return (
   
            <div className="card">
                <div className="card_title">{this.props.part.name}</div>
                <div className="card_information">
            
                     
                <img className="img" src=
                    {this.props.part.photo} alt="img"/>

    
                <p>Item Number:{this.props.part.item_number}</p>
                
                <p>Material:{this.props.part.material}</p>
                <p>Colour:{this.props.part.colour}</p>
                <p><div className="card_price">{this.props.part.price}</div></p>
                <p>Condition:{this.props.part.condition}</p>
                </div>
                
                <div className="card_bottom">
                <Link className="edit-button" to={"/EditCarPart/" + this.props.part._id}>Edit</Link>
                <Link className="delete-button" to={"/DeleteCarPart/" + this.props.part._id}>Delete</Link>
                </div>
            </div>
  
          
        
        )
    }
}