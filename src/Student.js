function Student(props){
    console.log(props)
    return(
        <div >
            <h1> hello props </h1>
            <h1>{props.name}</h1>
            {/* <h4>{props.other.address}</h4> */}
           
        </div>
    )
}
export default Student;