import React, { Component } from "react";

export default class Sidenav extends Component {
  render() {
    return (
      <div id="sidenav">
        
        
          <nav>
            <div className="navLinks">
              <ul>
                <li>
                <button onClick={this.props.filterNew}>Filter By New</button>
                </li>
                <li>
                <button onClick={this.props.filterUsed}>Filter By Used</button>
                </li>
                <li>
                <button onClick={this.props.highLow}>Price: High to Low</button>
                </li>
                <li>
                <button onClick={this.props.lowHigh}>Price: Low to High</button>
                </li>
                <li>
                <button onClick={this.props.filterOther}>Filter By Other</button>
                </li>
              </ul>
            </div>
          </nav>

        </div>

    );
  }
}
