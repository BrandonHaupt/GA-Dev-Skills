import { useRef } from "react"


// Uncontrolled because it's not controlled by the form
function Uncontrolled(props){

    const inputRef = useRef(null)

    const handleClick = (event) => {
        // console.log(inputRef.current) //* targets what the function is attached to
       // console.log(inputRef.current.value) //* Grabs the value of what is being typed into the box'
   
    }

    return <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>Submit</button>
    </div>
}

export default Uncontrolled