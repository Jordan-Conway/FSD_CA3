import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbarTop">
        <div className="login_regester_container">
          <Link className="green-button" to={"/Login"}>
            Login
          </Link>{" "}

          <Link className="blue-button" to={"/Register"}>Register
          </Link>{" "}
          <br />
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

                <Link className="blue-button" to={"/DisplayAdminTable"}>Admin</Link>
                <li>

                  <Link className="blue-button" to={"/ShoppingCart"}><img alt="cart icon" src="" /></Link>

                </li>
                <li>
                  <i class="fa-sharp fa-solid fa-user"></i>
                  <Link className="blue-button" to={"/UserTable"}>User list</Link>

                </li>
                <li>

                  <input class="searchfrom" type="search" placeholder="Search" aria-label="Search" onChange={this.props.searchArray}></input>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}