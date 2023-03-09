import React, {Component} from "react"
// import { Link } from "react-router-dom"

import axios from "axios"
import {SERVER_HOST} from "../config/global_constants"  
// import Logout from "./Logout"
import CarTable from "./CarTable"
import Navbar from "./Navbar"
import Sidenav from "./SideNav"
import '../css/style.css'

// import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_ADMIN, SERVER_HOST} from "../config/global_constants"

export default class DisplayAllCars extends Component 
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            carParts:[]
        }
    }
    
    
    componentDidMount() 
    {
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
  
    render() 
    {   
        return (   
            
            <div className="navbarBottom">
            <Navbar Navbar={this.state.Navbar} /> 

            
            

            <div className="sidenav">
            <Sidenav Sidenav={this.state.Sidenav} /> 
            </div> 
  
                    
            <div className="form-container">
                <div className="table-container">
                    <CarTable cars={this.state.carParts} />

 
            </div> 
            
            </div>   
   
           
           </div>
           
        )
    }
}




// render() 
// {   
//     return (           
//         <div className="form-container">
//             {
//                 localStorage.accessLevel > ACCESS_LEVEL_GUEST 
//                 ? <div className="logout">
//                     {
//                         localStorage.profilePhoto !== "null" 
//                         ? <img id="profilePhoto" src={`data:;base64,${localStorage.profilePhoto}`} alt=""/>
//                         : null
//                     }                        
//                     <Logout/>
//                   </div>
//                 : <div>
//                     <Link className="green-button" to={"/Login"}>Login</Link>
//                     <Link className="blue-button" to={"/Register"}>Register</Link>  
//                     <Link className="red-button" to={"/ResetDatabase"}>Reset Database</Link>  <br/><br/><br/></div>
//             }
            
//             <div className="table-container">
//                 <CarTable cars={this.state.cars} /> 
                    
//                 {
//                     localStorage.accessLevel >= ACCESS_LEVEL_ADMIN 
//                     ? <div className="add-new-car">
//                         <Link className="blue-button" to={"/AddCar"}>Add New Car</Link>
//                       </div>
//                     : null
//                 }
//             </div>
//         </div> 
//     )
// }
// }