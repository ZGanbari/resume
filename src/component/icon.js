import React, {Component} from "react"

 class Down extends Component{
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
                    marginBottom:"-44px",
                    transform:"translate(0px,-50px)"
            
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
 export default Down
