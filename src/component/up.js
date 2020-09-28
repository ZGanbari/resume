import React, {Component} from "react"


class Up extends Component{
    render(){
       const icon=this.props.icon
        return(
            <div 
            style={
                {
                    display :"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center",
                    marginBottom:"-100px",
                   
                   
            
                }
            }>
                <div
                style={{maxWidth:"40px"}}>
                    <img src={icon} />
                </div>

            </div>
   
)
    }
}
 export default Up