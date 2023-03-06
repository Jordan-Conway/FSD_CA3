import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import { Redirect, Link } from "react-router-dom"
import axios from "axios"

import LinkInClass from "../components/LinkInClass"

import { SERVER_HOST } from "../config/global_constants"

export default class EditCarPart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ``,
            item_number: ``,
            material: ``,
            colour: ``,
            price: ``,
            condition: ``,
            redirectToDisplayAllCars: false
        }
    }

    componentDidMount() {
        this.inputToFocus.focus()

        axios.get(`${SERVER_HOST}/carParts/${this.props.match.params.id}`)
            .then(res => {
                if (res.data) {
                    if (res.data.errorMessage) {    
                        console.log(res.data.errorMessage)
                    }
                    else {
                        this.setState({
                            name: res.data.name,
                            item_number: res.data.item_number,
                            material: res.data.material,
                            colour: res.data.colour,
                            price: res.data.price,
                            condition: res.data.condition
                        })
                    }
                }
                else {
                    console.log(`Record not found`)
                }
            })
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const carObject = {
            name: this.state.name,
            item_number: this.state.item_number,
            material: this.state.material,
            colour: this.state.colour,
            price: this.state.price,
            condition: this.state.condition
        }

        axios.put(`${SERVER_HOST}/carParts/${this.props.match.params.id}`, carObject)
            .then(res => {
                if (res.data) {
                    if (res.data.errorMessage) {
                        console.log(res.data.errorMessage)
                    }
                    else {
                        console.log(`Record updated`)
                        this.setState({ redirectToDisplayAllCars: true })
                    }
                }
                else {
                    console.log(`Record not updated`)
                }
            })
    }
    
    render() {
        return (
            <div className="form-container">
                {this.state.redirectToDisplayAllCars ? <Redirect to="/DisplayAllCars" /> : null}

                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={(input) => { this.inputToFocus = input }} type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="item_number">
                        <Form.Label>Item Number</Form.Label>
                        <Form.Control type="text" name="item_number" value={this.state.item_number} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="material">
                        <Form.Label>Material</Form.Label>
                        <Form.Control type="text" name="material" value={this.state.material} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="colour">
                        <Form.Label>Colour</Form.Label>
                        <Form.Control type="text" name="colour" value={this.state.colour} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="condition">
                        <Form.Label>Condition</Form.Label>
                        <Form.Control type="text" name="condition" value={this.state.condition} onChange={this.handleChange} />
                    </Form.Group>
                    <LinkInClass value="Add" className="green-button" onClick={this.handleSubmit} />

                    <Link className="red-button" to={"/DisplayAllCars"}>Cancel</Link>
                </Form>
            </div>
        )
    }
}