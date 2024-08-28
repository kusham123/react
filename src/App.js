import logo from './logo.svg';
import style from './custom.module.css'
import './style.css'
import './App.css';
// import User  from  './User'
//import { useState } from 'react';
import Student from './Student'
import Student1 from './Student1'
import Profile from './Profile';
//import React from 'react';

import React, { Fragment, useEffect,useState,useMemo,createRef,useRef } from 'react'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Cols from './Cols';
import Count from './Count';
// import React, { useMemo } from 'react';
import Forwardref from './Forwardref'


// function App() {

//  // function component 
//   // function Apple(){
//   //    return(<div>function Element</div>)
//   // }
//  // let data = "amit";
//   // event and function
//   // function orange(){
//   //   let data = "annu";
//   // }

//   const [data,setData]=useState(0)
//   function updateData(){
//     setData(data+1)
//   }

//   const [name,setName]=useState("Preeti")
//   console.warn("_________");
//   return (
//     <div className="App">
     
//       {
//         /* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */
//       }
//       <h2>Hello world hh</h2>
//       {/* <Apple />
//       <h1>{data}</h1>
//     <button onClick={orange}>click me</button> */}
//     <h1>{data}</h1>
//       <button onClick={updateData}>update Data</button>
    
//       {/* props here */}
      
//       <Student name={name} /> 
//       {/* <Student name={"Rahul"} email={"rahul123@gmail.com"} />  */}
//       <button onClick={()=>{setName("kusham")}}>Upadte Name</button>

//       {/* props with class component */}
//       <Student1 name={"nitu"} ></Student1>
//     </div>
//   );
// }


  // props with calss component
// class App extends React.Component{
// constructor(){
//   super();
//   this.state={
//     name:"Pinki"
//   }
// }
//   render()
//    {
//     return(
//     <div className='App'>
//     <h1>Props !</h1>
//     <Student1 name={this.state.name}>
//       <div>props e=with calss</div>
//     </Student1>
//     <button onClick={()=>this.setState({name:"seema"})}>update Name</button>
//     </div>
//     )
//   }
// }

// function App(){
  
//   // get and show input box data
//   // const [data,setData]=useState(null)
//   // const [print,setPrint]=useState(false)
  
//   // function getData(val){
//   //   console.log(val.target.value)
//   //   setData(val.target.value)
//   // }

//   // hide and show values
//   const [status,setStatus]=React.useState(true)
//   return (
//     <div className='App'>
//       {/* {
//         print?
//         <h1>{data}</h1>
//         :null
//       }
//     <h1> Get Input box value</h1>
//     <input type="text" onChange={getData}/>
//     <button onClick={()=>setPrint(true)}>Print Data</button> */}
    
//      {/* hide/show */}
//     {
//       status? <h1>Hello world!</h1>:null
//     }
//     {/* <button  onClick={()=>setStatus(false)}>Hide</button>
//     <button  onClick={()=>setStatus(true)}>Show</button> */}
//     <button  onClick={()=>setStatus(!status)}>Toggle</button>
    
//     {/* else if condition */}
//     <Profile />
//     </div>
//   )
// }

// from submit with react
// function App(){
//   const[name,setName]=useState("");
//   const[tnc,setTnc]=useState("");
//   const[interest,setInterest]=useState("");
//   function getFormData(e){
//     console.log(name,tnc,interest)
//    e.preventDefault()
//   }
//   return(
//     <div className='App'>
//        <h1> Handle From in React </h1>
//        <form onSubmit={getFormData}>
//         <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)} /><br/><br/>
//         <select onChange={(e)=>setInterest(e.target.value)}>
//           <option>Select Option</option>
//           <option>DC</option>
//           <option>PC</option>
//           <option>IS</option>
//           <option>IPS</option>
//         </select><br /><br />
//         <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Term and condition</span><br /><br />
//         <button type='submit'>Submit</button>
//        </form>
//     </div>
//   )
// }


// class mthode with construter render and compenentDidMount()

// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.log('Constrator')
//     this.state={
//       // name:"mamta"
//       count:0
//     }
//   }

//   // componentDidMount()
//   // {
//   //   console.log("componentDidMount")
//   // }
//   componentDidUpdate(preProps,PreState,snapshort){
//     console.log("hello ComponentDidUpdate",PreState.count,this.state.count)
//     // if(PreState.count===this.state.count){
//     //   alert("data is same")
//     // }
//     if(this.state.count <10){
//       this.setState({count:this.state.count+1})
//     }
//   }
//   render()
//   {
//     console.log("render")

//     return(
//       <div className='App'>
//         {/* <h1>Component Did Mount {this.state.name}</h1> */}
//         <h1>Component Did Mount {this.state.count}</h1>
//         {/* <button onClick={()=>{this.setState({name:"meenu"})}}>Update Name</button> */}
//         <button onClick={()=>{this.setState({count:1})}}>Update Name</button>
//       </div>
//     )
//   }
// }

// useEffect 

// useEfeect in react js
// function App(){
  
//   const[data,setData]=useState(10);
//   const[count,setCount]=useState(100);

//   useEffect(()=> {
//    console.warn("called with data")
//   },[data,count])
//   return(
//     <div className='App'>
//       <br></br>
//       <h1>Count: {count} </h1>
//       <h1>Data: {data} </h1>

//        <button onClick={()=>setCount(count+1)}>Update Count</button>
//        <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }


///css used in react js
// function App(){
  
//   return(
//     <div className='App'>
//        <h1 className='secondry'> Style type 1 in React js </h1>
//        <h1 style={{color:'balck', backgroundColor:'yellow'}}> Style type 2 in React js </h1>
//        <h1 className={style.primary}> Style type 3 in React js </h1>
       
//     </div>
//   )
// }

// react with bootstrap and loop like map,list
// function App(){
//   const users =[
//     {name:'Nitu', email:'nitu123@gmail.com',contact:'111',address:[{Hn:"34",city:"grugram",country:"india"},
//     {Hn:"78",city:"delhi",country:"india"},
//     {Hn:"90",city:"panjab",country:"india"},
//     {Hn:"89",city:"mathura",country:"india"}]},

//     {name:'meenu', email:'meenu123@gmail.com',contact:'783',address:[{Hn:"34",city:"grugram",country:"india"},
//     {Hn:"78",city:"delhi",country:"india"},
//     {Hn:"90",city:"panjab",country:"india"},
//     {Hn:"89",city:"mathura",country:"india"}]},

//     {name:'seema', email:'seema123@gmail.com',contact:'111',address:[{Hn:"34",city:"grugram",country:"india"},
//     {Hn:"78",city:"delhi",country:"india"},
//     {Hn:"90",city:"panjab",country:"india"},
//     {Hn:"89",city:"mathura",country:"india"}]},

//     {name:'megha', email:'megha123@gmail.com',contact:'453',address:[{Hn:"34",city:"grugram",country:"india"},
//     {Hn:"78",city:"delhi",country:"india"},
//     {Hn:"90",city:"panjab",country:"india"},
//     {Hn:"89",city:"mathura",country:"india"}]},
//   ]
//   return(
//     <div className='App'>
//        <h1>Bootstarp in React js </h1>
//        {/* <Table striped variant='dark'>
//         <tbody>
//         <tr>
//           <td>Name</td>
//           <td>E-mail</td>
//           <td>Contact</td>
//         </tr>
//         {
//           users.map((item,i)=>
//           item.contact === '111'?
//           <tr key={i}>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.contact}</td>
//           </tr>:null
//           )
//         }
//         </tbody>
//        </Table> */}
//        <Table striped variant='dark'>
//         <tbody>
//           <tr>
//             <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Conatct</td>
//             <td>Address</td>
//           </tr>
//           {
//           users.map((item,i)=>
//           <tr key={i}>
//             <td>{i+1}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.contact}</td>
//             <td>
//             <Table striped variant='dark'>
//             <tbody>
//               {
//                 item.address.map((data)=>
//                 <tr>
//                   <td>{data.Hn}</td>
//                   <td>{data.city}</td>
//                   <td>{data.country}</td>
                 
//                 </tr>
//                 )
//               }
//                </tbody>
//                </Table>
//               </td>
            
//           </tr>
//           )
//          }
//         </tbody>
//        </Table>

//     </div>
//   )
// }

//reuse component
// function App() {
//   const stuData = [
//     {
//       name: 'Amit', email: 'amit123@gmail.com', contact:'123'
//     },
//     {
//       name: 'varun', email: 'varun123@gmail.com',contact:'103'
//     },
//     {
//       name: 'Tarun', email: 'Tarun123@gmail.com', contact:'1563'
//     },
//     {
//       name: 'Mahi', email: 'mahi123@gmail.com', contact:'673'
//     },
   
//   ]
//   return(
//     <div className='App'>
//      <h1>Reuse component</h1>
//      {
//       stuData.map((item,i)=>
//       // <h1>
//       //   {item.name}
//       // </h1>
//        <User data ={item} />
//       )
//      }
//     </div>
//   )
// }

// fragments use for rap multiple fragments

// function App(){

//   return (
//     // second methode fragment call
//     // <Fragment>
//     //   <h1>React Fragment</h1>
//     // </Fragment>

//      // second methode fragment call
//     <div>
//       <h1>React Fragment</h1>
//       <table>
//         <tbody>
//           <tr>
//           <Cols />
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }
// function App(){
//   // let data="seema sourot";
//   function parentAlert(data){
//     console.log(data);
//     alert(data.name);
//   }
//   return(
//     <div className='App'>
//       <h1>Lifting State Up</h1>
//       <User alert={parentAlert}/>
//     </div>
//   )
// }

//pure component
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//   render()
//   {
//     console.warn("check-rerending");
//     return(
//       <div>
//         <Count count={this.state.count} />
//         <h1>Pure Component in React {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count})}>Update count
//         </button>
//       </div>
//     )
//   }
// }

// useMemo hook
// function App() {
//    const [count,setCount]=useState(0);
//    const [item,setItem]=useState(10);

//    const multiCountMemo =useMemo(function multiCount(){
//     console.warn("multiCount")
//     return count * 5
//    },[count])

//    return (
//     <div className='App'>
//       <h1>useMemo hook in react </h1>
//       <h1>count : {count+1}</h1>
//       <h1>Item : {item} </h1>
//       <h1> {multiCountMemo} </h1>
//       <button onClick={()=>setCount(count+1)}>update count</button>
//       <button onClick={()=>setItem(item*10)}>update item</button>
      
//     </div>
//    )
// }


// ref 
// class App extends React.Component {
//   constructor(){
//     super();
//     this.inputRef=createRef();
//   }
//   componentDidMount()
//   {
//     // console.warn(this.inputRef.current.value)
//   }
//   getVal(){
    
//     console.warn(this.inputRef.current.value)
//     this.inputRef.current.style.color ="red"
//     this.inputRef.current.style.backgroundColor ="black"
//   }
//   render(){
//     return (
//       <div>
//         <h1>Ref in React</h1>
//         <input type='text' ref={this.inputRef} />
//         <button onClick={()=>this.getVal()}>Check Ref</button>
//       </div>
//     )
//   }
// }
//useRef
// function App(){
//   let inputRef = useRef(null)
//   function handleInput(){
//     console.warn("function call")
//     inputRef.current.value="100";
//     inputRef.current.focus();
//     inputRef.current.style.color="red"
//     inputRef.current.style.display="none"
//   }
//   return(
//     <div className='App'>
//       <h1>useRef in React </h1>
//       <input type='text ' ref={inputRef}/>
//       <button onClick={handleInput}>Handle Input</button>

//     </div>
//   )
// }

// forwardRef
// function  App(){
// let inputRef = useRef(null);
// function updateInput(){
//   inputRef.current.value="100"
//   inputRef.current.style.color="red"
//   inputRef.current.focus()
// }
//   return(
//     <div className='App'>
//       <h1>forwardRef in React</h1>
//       <Forwardref ref={inputRef} />
//       <button onClick={updateInput}>Update InputBox</button>
//     </div>
//   )
// }

// controlled component
function App(){
  let [val,setVal]=useState("000")
  return(
    <div className='App'>
      <h1>controlled Component</h1>
      <input type='text' value={val} defaultValue="0000" onChange={(e)=>setVal(e.target.value)} />
      <h3>value {val}</h3>
    </div>
  )
}
export default App;
