/*function fact(n){
    var fact=1;
    for(var i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}

function FactFun(ps){
    return(
        <div>
            <p>Factorial:{ps.number}={fact(ps.number)}</p> 
        </div>
    )
}
*/
let FactFun = (ps) =>{
    let fact=1;
    for(let i=1;i<=ps.number;i++)
    {
        fact=fact*i;
    }
    return <p>Factorial:{ps.number}={fact}</p>
}
export default FactFun;