import React, {Component} from "react"
import CarTable from "./CarTable"
import Navbar from "./Navbar"

export default class ShoppingCart extends Component{
    constructor(props){
        super(props)

        this.state = {
            items: localStorage.getItem('cart'),
        }
    }

    render(){
        return(
            <>
                <div className="navbarBottom">
                <Navbar/>
                </div>
                <CarTable isAddable={false} cars={this.state.items.split(',')} /> 
            </>
        )
    }
}