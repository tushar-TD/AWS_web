function EmpFun(ps)
{
    return(
        <div>
            <table className="table table-bordered">
                {ps.emps.map(v=>{return <tr key={v}>
                    <td>{v.empid}</td>
                    <td>{v.ename}</td>
                    <td>{v.esal}</td>
                    <td>{v.ejob}</td>
              </tr>})}
          {/* {    ps.emps.map(v =>{return 
                <tr>
                    <td key={v.empid}>{v.empid}</td>
                    <td key={v.ename}>{v.ename}</td>
                    <td key={v.esal}>{v.esal}</td>
                </tr>})}*/}
         {/*} <tr> { ps.enames.map(v => {return <td key={v}>{v}</td>}) }</tr>
         <tr>{ ps.empids.map(v => {return <td key={v}>{v}</td>}) }</tr>
         <tr> { ps.esals.map(v => {return <td key={v}>{v}</td>}) }</tr>*/}
            </table>
        </div>
    )
}

EmpFun.defaultProps={
   emps:[{"empid":1,"ename":'Suraj',"esal":10000,"ejob":"Coder"},{"empid":2,"ename":'Shiv',"esal":20000,"ejob":"Coder"}]
 /* enames:["Shri","Shiv","Suraj"],
  empids:[1,2,3],
  esals:[1000,2000,3000]*/
}

export default EmpFun;