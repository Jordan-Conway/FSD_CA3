import React, { Component } from "react";
import {Link} from "react-router-dom"
import Search from "./Search";

export default class Navbar extends Component {
  render() {
    return (

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

                <Link className="blue-button" to={"/ShoppingCart"}><img alt="cart icon" src=""/></Link>  
                
                </li>    
                <li>
                <i class="fa-sharp fa-solid fa-user"></i>
                  <Link className="blue-button" to={"/UserTable"}>User list</Link>

              </li> 
              <li>
                
                <input class="searchfrom" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="searchbutton" type="submit">Search</button>
                </li>

               
                   <li>
               
                <Link className="login-nav-button" to={"/Login"}>
                <i class="fa-solid fa-user"></i> Login
          </Link>{" "}
          
          
                </li>
             
              </ul>
            </div>
          </nav>
        </div>
  


      
      
    );
    
  }
}