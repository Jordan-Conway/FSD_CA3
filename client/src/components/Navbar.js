import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbarTop">
        <div className="brandName">DealsOnWheels</div>

        <input className="searchfrom" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="searchbutton" type="submit">Search</button>
            

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
             
                  <Link className="blue-button" to={"/DisplayAllCars"}>Home</Link>
                  
                </li>
                <li>
                
                </li>
                <li>
                  <a href="#">Used</a>
                </li>
                <li>
                  <a href="#">New</a>
                </li>
                <li>

                <Link className="blue-button" to={"/DisplayAdminTable"}>Admin</Link>
           
                </li>    
                <li>

                  <Link className="blue-button" to={"/UserTable"}>User list</Link>

              </li>   
              </ul>
            </div>
          </nav>
        </div>
  
      </div>

      
      
    );
    
  }
}