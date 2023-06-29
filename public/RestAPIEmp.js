var mysql=require('mysql2');
var exp=require('express');
var app=exp();
app.listen(9000,function(){
	console.log("server-9000");
})

var con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"dac"
});

con.connect(function(err){
	if(!err)
		console.log("Connected");
	else
		console.log("Not Connected.");
});

app.get('/emp',function(req,res){
	con.query("Select * from emp",function(err,result){
		if(!err)
		{
			//res.send(result);
			/*res.write("<table border='1'>");
			result.forEach(function(v){
				res.write("<tr>");
				res.write("<td>"+v.EMPNO+"</td>");
				res.write("<td>"+v.ENAME+"</td>");
				res.write("<td>"+v.JOB+"</td>");
				res.write("<td>"+v.SAL+"</td>");
				res.write("</tr>");
                
	        })
			res.write("</table>");
			res.end();*/
            res.send(JSON.stringify(result));
		}
});
});