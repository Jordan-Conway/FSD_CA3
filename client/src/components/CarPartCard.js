import React, { Component } from "react"
import { Link } from "react-router-dom"

import CarPartIMG from "./CarPartIMG"
import axios from "axios"
import { SERVER_HOST } from "../config/global_constants"


export default class CarPartCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addable: this.props.addable
        }
    }

    addToCart = e => {
        let tempList = []
        let added = false
        if (localStorage.getItem('cart') !== "") {
            tempList.push.apply(tempList, JSON.parse(localStorage.getItem('cart')))
        }

        tempList.forEach(item => {
            if (item.itemId === this.props.part._id) {
                item.quantity++
                added = true
            }
        })
        if (!added) {
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
                <div className="card_title">{this.props.part.name}</div>
                <div className="card_information">


                    {/* (this.props.part.photo == "" ?{this.props.part.photo.map((photo) => <CarPartIMG photo={photo} />)}: <img className="img" src="https://img.vast.com/usnews/3707326471654947088/1/320x240" alt="img" />) */}
                    <img className="img" src={this.props.part.photo} alt="img" />

                    <p>Item Number:{this.props.part.item_number}</p>

                    <p>Material:{this.props.part.material}</p>
                    <p>Colour:{this.props.part.colour}</p>
                    <p><div className="card_price">{this.props.part.price}</div></p>
                    <p>Condition:{this.props.part.condition}</p>
                </div>

                <div className="card_bottom">
                    {this.state.addable ? <button className="add-to-cart-button" onClick={this.addToCart}>Add to Cart</button> : null}
                </div>
            </div>



        )
    }
}