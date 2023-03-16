import React, { Component } from "react"
import CarPartCard from "./CarPartCard"


export default class CarPartBody extends Component {
    render() {
        return (
            <div>
                {this.props.cars.map((part) => <CarPartCard key={part._id} part={part} />)}
            </div>
        )
    }
}