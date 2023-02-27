import React, {Component} from "react"
import UserPurchases from "./userPurchases"

export default class UserDetails extends Component
{
    render()
    {
        return(
            <div className="userDetails">
                <UserDetails/>
                <UserPurchases/>
                <BuyAgain/>
            </div>
        )
    }
}