import React, { Component } from "react"
import { Link } from "react-router-dom"
import AdminCarPartsTable from "./AdminCarPartsTable"

import axios from "axios"
import {SERVER_HOST} from "../config/global_constants"

export default class DisplayAdminTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carParts: []
        }
    }


    componentDidMount() {
        axios.get(`${SERVER_HOST}/carParts`)
            .then(res => {
                if (res.data) {
                    if (res.data.errorMessage) {
                        console.log(res.data.errorMessage)
                    }
                    else {
                        console.log("Records read")
                        this.setState({ carParts: res.data })
                        console.log(res.data)
                    }
                }
                else {
                    console.log("Record not found")
                }
            })
    }
    render() {
        return (
            <div className="table-container">
                <AdminCarPartsTable parts={this.state.carParts} />
            </div>
        )
    }
}