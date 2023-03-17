import React, {Component} from "react"

export default class UserDetails extends Component
{
    render()
    {
        return(
            <div className="userDetails">
                <img className="userProfilePicture" alt="profile" src={localStorage.userProfilePicture} />
                <p>{localStorage.username === undefined ? "Username is undefined" : localStorage.username}</p>
                <p>Purchases: {this.props.numOfPurchaes}</p>
                <p>{localStorage.joinDate === undefined ? "Join date is undefined" : localStorage.username}</p>
            </div>
        )
    }
}
