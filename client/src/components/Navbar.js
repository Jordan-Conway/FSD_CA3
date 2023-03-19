import React, { Component } from "react";
import {Link} from "react-router-dom"
import { ACCESS_LEVEL_GUEST } from "../config/global_constants";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbarTop">
        <div className="login_regester_container">
        {
          localStorage.accessLevel > ACCESS_LEVEL_GUEST ? 
          <Link className="red-button" to={"/Logout"}>
            Logout
          </Link>
          :
          null
        }
        {
          localStorage.accessLevel <= ACCESS_LEVEL_GUEST ? 
          <Link className="green-button" to={"/Login"}>
            Login
          </Link>
          :
          null
        }
        {
          localStorage.accessLevel <= ACCESS_LEVEL_GUEST ? 
          <Link className="blue-button" to={"/Register"}>
            Register
          </Link>
          :
          null
        }
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
                  <i className="fa-sharp fa-solid fa-house"></i>
                  <Link className="blue-button" to={"/DisplayAllCars"}>Home</Link>
                </li>

                <Link className="blue-button" to={"/DisplayAdminTable"}>Admin</Link>
                <li>

                  <Link className="blue-button" to={"/ShoppingCart"}>Cart</Link>

                </li>
                {
                 localStorage.accessLevel > ACCESS_LEVEL_GUEST ?
                <li>
                  <i className="fa-sharp fa-solid fa-user"></i>
                  <Link className="blue-button" to={"/UserTable"}>User list</Link>

                </li>
                :
                null
                }
                <li>

                  <input className="searchfrom" type="search" placeholder="Search" aria-label="Search" onChange={this.props.searchArray}></input>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}