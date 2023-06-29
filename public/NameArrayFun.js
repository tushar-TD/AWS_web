function NameArrayFun(ps){
    return(
        <div>
            <ul>
                {
                    ps.names.map(v => {return <li key={v}>{v}</li>})
                }
            </ul>
        </div>
    )
}



NameArrayFun.defaultProps={
    names:["Shri","Shiv","Suraj","Deepak","Rupesh"]
}

export default NameArrayFun;