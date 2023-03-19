import React, {Component} from "react"
import UserDetails from "./UserDetails"
import UserPurchases from "./UserPurchases"

export default class UserProfile extends Component
{
    render()
    {
        return(
            <div className="userProfile">
                <UserDetails/>
                <UserPurchases/>
            </div>
        )
    }
}