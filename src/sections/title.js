import React, {Component} from "react"
import './title.css'
import {SocialIcon} from "react-social-icons"
import FullPage from "../component/FullPage"
import Down from "../component/icon"
import { Link, Element } from 'react-scroll'

 class Title extends Component{
    render(){
        const data= this.props.data
        return(
            <div>
              <Element name="title" className="element"/>
           <FullPage className="first">
      <h1 >
          {data.title} 
        </h1>
        <h2>
          {data.subtitle}
        </h2>
        <div className= "icons-wr">
       {Object.keys(data.links).map(key=>{
         return(
          <div className= "icon"> <SocialIcon url={data.links[key]}/></div>
         )
       })}
      </div>
      
           </FullPage>
           <Link activeClass="active"
            to="about" spy={true}
            smooth={true} 
            offset={50} 
            duration={500} 
            delay={5}>
  
           <Down icon={data.icon}/>
           </Link>
           <Element name="about" className="element"/>
          
    </div>
)
    }
}
 export default Title