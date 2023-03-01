import React, {Component} from "react"
import UserDetails from "./userDetails"
import UserPurchases from "./UserPurchases"
import BuyAgain from "./BuyAgain"

export default class UserProfile extends Component
{
    render()
    {
        return(
            <div className="userProfile">
                <UserDetails/>
                <UserPurchases/>
                <BuyAgain/>
            </div>
        )
    }
}