import { useEffect, useState } from "react";

export default function RestAPIFun(){
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(users=>setUsers(users))
    },[]);

    return(
        <div>
            <table className="table table-bordered">
                <tbody className="table">
                {
                    users.map(v => {return (<tr key={v.empid}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.usename}</td>
                            <td>{v.email}</td>
                        </tr>)
                    })
                }
                </tbody>
            </table>
        </div>
    )
}