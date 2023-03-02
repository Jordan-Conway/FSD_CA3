import React, {Component} from "react"

import CarTable from "./CarTable"

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

                    

            <div className="form-container">
                <div className="table-container">
                    <CarTable cars={this.state.cars} /> 
                </div>
            </div> 
        )
    }
}