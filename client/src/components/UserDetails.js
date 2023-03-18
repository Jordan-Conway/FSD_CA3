import React, {Component} from "react"

export default class UserDetails extends Component
{
    constructor(props){
        super(props)

        this.state={
            username:"",
            joinDate: "",
            numOfPurchases:0,
        }
    }

    componentDidMount(){
        
    }

    render()
    {
        return(
            <div className="userDetails">
                <p>{localStorage.username === undefined ? "Username is undefined" : localStorage.username}</p>
                <p>Purchases: {this.props.numOfPurchases}</p>
                <p>{localStorage.joinDate === undefined ? "Join date is undefined" : localStorage.username}</p>
            </div>
        )
    }
}
