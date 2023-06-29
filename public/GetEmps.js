import { useEffect, useState } from "react"

 export default function GetEmps (){

    const [emps, setEmps] = useState([]);

    useEffect( ()=>{
        fetch("http://localhost:9000/emp")
        .then( resp=> resp.json())
        .then( emps=> setEmps(emps) )
    } ,[]);


    return (
        <div>
            <h1> Emps </h1>
            <table className="table table-bordered table-hover">
                {
                    emps.map(v=> {
                        return (
                            <tr>
                                <td> {v.EMPNO} </td>
                                <td> {v.ENAME} </td>
                                <td> {v.JOB }</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )


}
