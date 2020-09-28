import React, {Component} from "react"
import './skill.css'
 import { Link, Element } from 'react-scroll'
import Up from "../component/up"

import FullPage from "../component/FullPage"


 class Skill extends Component{
    render(){
        const data= this.props.data
        return(
          <div>
           <FullPage className="third">
       <h1 className="h1">
           {data.sections[1].title}
           </h1>
           <div className="cards-wr">
             {data.sections[1].iteme.map(skill=>
             { return(
               <div className="cards">
                 <div className="img-wr">
                   <img  src={skill.content.image} alt={skill.content.alt}/>
                 </div>
                 <div className="skill-wr">
                   <h2>{skill.content.title}
            </h2>
                 </div>

               </div>

              );})}
           </div>
           </FullPage>
           <Link activeClass="active"
            to="title" spy={true}
            smooth={true} 
            offset={50} 
            duration={500} 
            delay={5}>
  
           <Up icon={data.up} />
           </Link>
           <Element name="skill" className="element"/>
    </div>
)
    }
}
 export default Skill