import React, { Component } from "react"
import CarPartCard from "./CarPartCard"


export default class CarTable extends Component {
    constructor(props){
        super(props)
        this.state= {
            isAddable: this.props.isAddable
        }
    }

    //If addable is not specified, default to true
    componentDidMount(){
        if(!this.state.addable){
            this.setState({isAddable: true})
        }
    }

    render() {
        return (
            <div>
                {this.props.cars.map((part) => <CarPartCard addable={this.state.addable} key={part._id} part={part} />)}
            </div>
        )
    }
}