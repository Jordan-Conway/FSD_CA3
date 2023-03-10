import React, { Component } from "react"

import '../css/modal.css'


export default class SortModal extends Component {

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <button onClick={this.props.closeModal}>X</button>
                    <button onClick={this.props.highLow}>Price: High to Low</button>
                    <button onClick={this.props.lowHigh}>Price: Low to High</button>
                </div>

            </div>


        )
    }
}