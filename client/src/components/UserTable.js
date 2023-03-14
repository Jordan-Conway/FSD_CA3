import React, { Component } from "react"
import UserTableRow from "./UserTableRow"


export default class UserTable extends Component {
    render() {
        return (
            <div>
                {this.props.user.map((user) => <UserTableRow key={user.id} user={user} />)}
            </div>
        )
    }
}