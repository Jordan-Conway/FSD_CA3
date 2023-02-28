import React, {Component} from "react"
import UserProfile from "./UserProfile"
import UserPurchases from "./UserPurchases"
import BuyAgain from "./BuyAgain"

export default class UserDetails extends Component
{
    render()
    {
        return(
            <div className="userDetails">
                <UserProfile/>
                <UserPurchases/>
                <BuyAgain/>
            </div>
        )
    }
}