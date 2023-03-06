import React, {Component} from "react"
import CarTableRow from "./CarTableRow"


export default class CarTable extends Component 
{
    render() 
    {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Number</th>
                        <th>Material</th>
                        <th>Colour</th>
                        <th>Price</th>
                        <th>Condition</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                  
                <tbody>
                    {this.props.cars.map((part) => <CarTableRow key={part._id} part={part}/>)}
                </tbody>
            </table>      
        )
    }
}