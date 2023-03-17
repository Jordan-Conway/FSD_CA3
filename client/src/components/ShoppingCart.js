import React, {Component} from "react"
import axios from "axios"
import CarTable from "./CarTable"
import Navbar from "./Navbar"
import { SERVER_HOST } from "../config/global_constants"


export default class ShoppingCart extends Component{
    constructor(props){
        super(props)

        this.state = {
            items: JSON.parse(localStorage.getItem('cart'))
        }
    }

    componentDidMount(){
        console.log(this.state.items)
    }

    handleBuy = e => {
        const purchaseObject = {
            purchaseDate: new Date(),
            purchaseStatus: 'paid',
            items: this.state.items
        }

        axios.post(`${SERVER_HOST}/purchase`, purchaseObject)
            .then(res =>{
                if(res.data){
                    if (res.data.errorMessage) {
                        console.log(res.data.errorMessage)
                    }
                    else {
                        console.log("Purchase success")
                        this.state.items.forEach(item => {
                            axios.get(`${SERVER_HOST}/carParts/${item.itemId}`)
                            .then(res =>{
                                let partObject = res.data
                                partObject.quantity -= item.quantity
                                axios.put(`${SERVER_HOST}/carParts/${item.itemId}`, partObject)
                                .then(res => {
                                    if(res.data){
                                        console.log("Success Updating Quantity")
                                    }
                                })
                            })
                        });
                    }
                }
                else{
                    console.log("Error with purchase")
                }
            })

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