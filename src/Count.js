// import './App.css';
import React,{PureComponent} from "react";
class Count extends React.Component {
    constructor()
    {
      super();
      this.state={
        count:1
      }
    }
    render()
    {
      console.warn("user component check-rerending");
      return(
        <div className="App">
          <h1>User Component {this.props.count} </h1>
          
        </div>
      )
    }
  }
  export default Count;