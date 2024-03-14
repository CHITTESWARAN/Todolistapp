import React from "react";

class Apple extends React.Component{
    render(){
        const{ appleInfo}=this.props;
        const{type,color}=appleInfo
        
        return(
            <div>
            <h2>Iam a {color} {type}Apple!</h2>
           
            </div>
        )
    }

}
export default Apple;