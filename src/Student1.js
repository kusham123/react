import React from "react";

// props with calss component
export default class Student1 extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>class component</h1>
                 <div>Student1 {this.props.name}</div>
            </div>
        )
    }
} 
