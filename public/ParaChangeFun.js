import { useState } from "react"

export default function ParaChangeFun()
{
    const[col,setCol]=useState("red");
    return(
        <div>
            <p style={{color:col}} onClick={()=>
            {
                if(col=="red")
                    setCol("yellow")
                else
                    setCol("red")
            }}>Shrikant Rane</p>
        </div>
    )
}