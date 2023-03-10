import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class CarPartCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.part.name}</h1>
                <p>{this.props.part.item_number}</p>
                <p>{this.props.part.material}</p>
                <p>{this.props.part.colour}</p>
                <p>{this.props.part.price}</p>
                <p>{this.props.part.condition}</p>
                <Link className="green-button" to={"/EditCarPart/" + this.props.part._id}>Edit</Link>
                <Link className="red-button" to={"/DeleteCarPart/" + this.props.part._id}>Delete</Link>
            </div>


        )
    }
}