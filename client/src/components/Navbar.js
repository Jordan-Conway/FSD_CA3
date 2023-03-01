import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbarTop">
        <div class="brandName">DealsOnWheels</div>
        {/* <input class="searchfrom" type="search" placeholder="Search" aria-label="Search">
            <button class="searchbutton" type="submit">Search</button>

             */}

        <div className="login_regester_container">
          <Link className="green-button" to={"/Login"}>
            Login
          </Link>{" "}
          <br />
          <Link className="blue-button" to={"/Register"}>
            Register
          </Link>{" "}
          <br />
        </div>

        <div id="navbarBottom">
          <nav>
            <div class="navLinks">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">All Parts</a>
                </li>
                <li>
                  <a href="#">Used</a>
                </li>
                <li>
                  <a href="#">New</a>
                </li>
                <li>
                  <a href="#">Mods</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
