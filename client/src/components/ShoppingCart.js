import React, {Component} from "react"
import Navbar from "./Navbar"

export default class ShoppingCart extends Component{
    constructor(props){
        super(props)

        this.state = {
            items: this.props.items,
        }
    }

    render(){
        return(
            <div className="navbarBottom">
            <Navbar/> 
        </div>
        )
    }
}