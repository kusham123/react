// import { Button } from "react-bootstrap";

// parent to child call
function User(props) {
  // console.log(props);
  const data={name:"anil sindhu", email:"anil123@gmail.com"}
    return(
      <div>
        <h1>user Name: </h1>
        <button onClick={()=>props.alert(data)}>click Me</button>
      </div>
    )

  }
  
  
  //function User() {
    // return (
    //   <div className="App">
    //     <h2>Hello user</h2>
    //     <Button variant="primary">Primary</Button>{' '}
    //   <Button variant="secondary">Secondary</Button>{' '}
    //   <Button variant="success">Success</Button>{' '}
    //   <Button variant="warning">Warning</Button>{' '}
    //   <Button variant="danger">Danger</Button>{' '}
    //   <Button variant="info">Info</Button>{' '}
    //   <Button variant="light">Light</Button>{' '}
    //   <Button variant="dark">Dark</Button>
    //   <Button variant="link">Link</Button>
    //     {/* <Button onClick={()=>alert("hello")}>Click me</Button> */}
    //   </div>
    // );
//}

export default User;


// calss component
// import React, {Component} from 'react'
// export default class User extends Component{
//     render(){
//         return(
//             <h1>Class Component</h1>
//         )
//     }
// }