import { useState } from "react"

export default function WelUserFun(){
    const[nm,setnm]=useState("");
    const[flag,setFlag]=useState(false)
    return(
        <div>
            <h1 style={{display: flag?"block":"none"}}>Welcome {nm}</h1>
            <form>
                Enter Name:
                <input type="text" name="n" id="n"/>
                Enter Password:
                <input type="password" name="p" id="p" />
                <button type="button" onClick={(e)=>
                {
                    setFlag(true);
                    setnm(document.getElementById("n").value)
                }}>Log In</button>
            </form>
        </div>
    )
}