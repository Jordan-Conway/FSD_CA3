import React, {Component} from "react"
import CarTable from "./CarTable"
import Navbar from "./Navbar"

export default class ShoppingCart extends Component{
    constructor(props){
        super(props)

        this.state = {
            items: localStorage.getItem('cart').split(','),
        }
    }

    handleBuy = e => {

    }

    render(){
        return(
            <>
                <div className="navbarBottom">
                <Navbar/>
                </div>
                <button onClick={this.handleBuy}>Purchase</button>
                <CarTable isAddable={false} cars={this.state.items} /> 
            </>
        )
    }
}