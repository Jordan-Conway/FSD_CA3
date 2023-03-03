import React, { Component } from "react";

export default class Sidenav extends Component {
  render() {
    return (
      <div id="sidenav">
          <h2>Login</h2>
          <nav>
            <div className="navLinks">
              <ul>
                <li>
                  <a href="#">Something</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Something</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

    );
  }
}
