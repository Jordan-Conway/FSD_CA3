import React, { Component } from "react"
import CarPartCard from "./CarPartCard"


export default class CarTable extends Component {
    render() {
        return (
            <table>
                
                <tbody>
                    {this.props.cars.map((part) => <CarPartCard key={part._id} part={part}/>)}
                </tbody>
            </table>      
        )
    }
}