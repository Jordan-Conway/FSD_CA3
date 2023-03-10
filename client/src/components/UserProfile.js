import React, {Component} from "react"
import UserDetails from "./UserDetails"
import UserPurchases from "./UserPurchases"
import BuyAgain from "./BuyAgain"

export default class UserProfile extends Component
{
    render()
    {
        return(
            <div className="userProfile">
                <UserDetails numOfPurchases={0}/>
                <UserPurchases/>
                <BuyAgain/>
            </div>
        )
    }
}