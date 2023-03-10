import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class CarPartCard extends Component {
    render() {
        return (
        
            <div className="card">
            <div>
                <div className="card_title"><h1>{this.props.part.name}</h1></div>
                <div className="card_information">
                     <p>{this.props.part.item_number}</p>
                    <p>{this.props.part.material}</p>
                    <p>{this.props.part.colour}</p>
                    <p className="card_price">{this.props.part.price}</p>
                    <p>{this.props.part.condition}</p>
                </div>
                <div className="card_bottom">
                <Link className="edit-button" to={"/EditCarPart/" + this.props.part._id}>Edit</Link>
                <Link className="delete-button" to={"/DeleteCarPart/" + this.props.part._id}>Delete</Link>
                </div>
            </div>
            </div>
        
        )
    }
}