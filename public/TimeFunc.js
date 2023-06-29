function TimeFunc(){
    var date=new Date();
    var arr = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    return (
        <div>
            <p>Date:{date.getDate()+"-"+arr[date.getMonth()]+"-"+date.getFullYear()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()}</p>
        </div>
    )
}
export default TimeFunc;