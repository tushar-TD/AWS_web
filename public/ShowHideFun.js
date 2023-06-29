import { useState } from "react"

export default function ShowHideFun(){
    const[dis,setDis]=useState("block")
    const[flag,setFlag]=useState(true);
    return(
        <div>
            <img src="logo192.png" style={{display: flag?"block":"none"}}/>
            <br />
            <input type="checkbox" name="c" id="c" checked={flag} onChange={(e)=>
                {
                    setFlag(e.target.checked)
                }} />
             <img src="logo192.png" style={{display: flag?"block":"none"}}/>
        </div>
    )
}