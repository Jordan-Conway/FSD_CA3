import React, {Component} from "react"

export default class UserDetails extends Component
{
    render()
    {
        return(
            <div className="userDetails">
                <img src={localStorage.userProfilePicture} />
            </div>
        )
    }
}