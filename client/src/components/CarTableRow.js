import React, {Component} from "react"



export default class CarTableRow extends Component 
{    
    render() 
    {
        return (
            <tr>
                <td>{this.props.part.name}</td>
                <td>{this.props.part.item_number}</td>
                <td>{this.props.part.material}</td>
                <td>{this.props.part.color}</td>
                <td>{this.props.part.price}</td>
                <td>{this.props.part.condition}</td>
            </tr>
        )
    }
}