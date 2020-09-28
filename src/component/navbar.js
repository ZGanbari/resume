import React, { Component } from "react";
import { Link, Element } from 'react-scroll'
 

import "./navbar.css"

class Nav extends Component{
  

   render(){
       return(
        <div className="Nav" >
        <div className="sections" >
        <Link activeClass="active"
            to="title" spy={true}
            smooth={true} 
            offset={50} 
            duration={500} 
            delay={5}>
  <div className="button">
           Home
           </div>
           
           </Link>
       
           <Link activeClass="active"
            to="about" spy={true}
            smooth={true} 
            offset={50} 
            duration={500} 
            delay={5}>
  <div className="button">
          About
           </div>
           
           </Link>
           <Link activeClass="active"
            to="skill" spy={true}
            smooth={true} 
            offset={50} 
            duration={500} 
            delay={5}>
  <div className="button">
           Skills
           </div>
           
           </Link>
           
        </div>
        <div className="chang" 
        // onClick={()=>{ChangeTeme()}}
        >
           
            Change Teme
        
            </div>
    </div>
       )
   }
}
export default Nav