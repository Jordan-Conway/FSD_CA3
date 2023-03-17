import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class CarPartCard extends Component {

    constructor(props){
        super(props)

        this.state = {
            addable: this.props.addable
        }
    }

    addToCart = e => {
        let tempList = []
        let added = false
        if(localStorage.getItem('cart') !== ""){
            tempList.push.apply(tempList, JSON.parse(localStorage.getItem('cart')))
        }

        tempList.forEach(item =>{
            if(item.itemId === this.props.part._id){
                item.quantity++
                added = true
            }
        })
        if(!added){
            const toAdd = {
                itemId: this.props.part._id,
                itemPrice: this.props.part.price,
                quantity: 1
            }
            tempList.push(toAdd)
        }
        localStorage.setItem('cart', JSON.stringify(tempList))
    }

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
                {this.state.addable ? <button className="add-to-cart-button" onClick={this.addToCart}>Add to Cart</button> : null}
                <Link className="edit-button" to={"/EditCarPart/" + this.props.part._id}>Edit</Link>
                <Link className="delete-button" to={"/DeleteCarPart/" + this.props.part._id}>Delete</Link>
                </div>
            </div>
            </div>
        
        )
    }
}