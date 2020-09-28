import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
import "./navbar.css"
// import logo from "./logo.png";

import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie, 
  faCogs /*...*/,
} from "@fortawesome/free-solid-svg-icons";
   
import "reactjs-navbar/dist/index.css";
 
class Nav extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Navbar
        // logo={logo}
        // loader={<Loader type="Puff" color="white" height={25} width={25} />}
        isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help...");
        }}
        menuItems={[
          {
            title: "Administration",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          {
            title: "Transactions",
            icon: faBookOpen,
            isAuth: () => {
              // Claim authorization logic...
              return false;
            },
          },
          {
            title: "Networks",
            icon: faGlobe,
            isAuth: true,
          },
          {
            title: "Reports",
            icon: faChartPie,
            isAuth: true,
          },
        ]}
      />
    );
  }
}
export default Nav