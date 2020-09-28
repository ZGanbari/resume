import React, {Component} from "react"
import './about.css'
import FullPage from "../component/FullPage"
import Down from "../component/icon"

 import { Link, Element } from 'react-scroll'




 class About extends Component{
    render(){
        const data= this.props.data
        return(
          <div>
               <FullPage className="second">
          <h1 className="h1">{data.sections[0].title}</h1>
         <p>{data.sections[0].item[0].content}</p>
         <p>{data.sections[0].item[1].content}</p>
              </FullPage>
              <Link activeClass="active"
            to="skill" spy={true}
            smooth={true} 
            offset={50} 
            duration={500} 
            delay={5}>
  
           <Down icon={data.icon}/>
           </Link>
           <Element name="skill" className="element"/>
               </div>
    
)
    }
}
 export default About