import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbarTop">
        <div id="navbarBottom">
          <nav>
            <div className="navLinks">
              <ul>
                <li>
                  <div className="logo">
                    <img src="logo.png" alt="Description of the image">
                    </img>
                  </div>

                </li>
                <li>
                  <i class="fa-sharp fa-solid fa-house"></i>
                  <Link className="blue-button" to={"/DisplayAllCars"}>Home</Link>

                </li>
              
                <li>
            
                  <i class="fa-sharp fa-solid fa-car"></i>
                  <Link className="blue-button" to={"/AddCarPart"}>Add New Car</Link>

                </li>
                <li>
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                  <Link className="blue-button" to={"/ShoppingCart"}>Cart</Link>

                </li>
                {/* <li>
                  <i class="fa-sharp fa-solid fa-user"></i>
                  <Link className="blue-button" to={"/UserTable"}>User list</Link>

                </li> */}
                <li>
                <li>
                <i class=" fa-sharp fa-solid fa-hammer"></i>
                <Link className="blue-button" to={"/DisplayAdminTable"}>Admin</Link>


                </li>
         

                  <input class="searchfrom" type="search" placeholder="Search" aria-label="Search" onChange={this.props.searchArray}></input>
                  <button className="searchbutton" type="submit">Search</button>
                </li>
                <li>
         
                
                <Link className="login-nav-button" to={"/Login"}><i class=" fa-solid fa-user"></i>Login</Link>
        
       </li>
              
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}