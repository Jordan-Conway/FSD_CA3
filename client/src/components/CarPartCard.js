import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class CarPartCard extends Component {
    render() {
        return (
   
            <div className="card">
                <div className="card_title">{this.props.part.name}</div>
                <div className="card_information">

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