import { useState } from "react"

function HelloState(){
    const[value,setValue]=useState("Welcome");
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={()=>
                {
                    if(value=="Welcome")
                        setValue("Hello") 
                    else
                        setValue("Welcome")  
                }}>Go</button>
        </div>
    )
}

export default HelloState;