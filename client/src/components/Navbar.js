import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div id="x">
       
        <div className="login_regester_container">
      
          
        </div>

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
                <li>

                  <input class="searchfrom" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="searchbutton" type="submit">Search</button>
                </li>


                <li>
                <i class=" fa-sharp fa-solid fa-hammer"></i>
                <Link className="blue-button" to={"/DisplayAdminTable"}>Admin</Link>


                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
  
}