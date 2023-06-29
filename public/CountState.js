import { useState } from "react";

function CountState(){
    const[count,setCount]=useState(1);
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
    )
}
export default CountState;