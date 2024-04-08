const connection = require("./connection")
const express = require("express")
const bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.json())

app.get("/employees",(req,res)=>{
    connection.query("SELECT * FROM employee",(err, rows)=>{
        if(err){
            console.log(err)
        }else{
          //  console.log(rows)
          res.send(rows)
        }
    })
})
app.get("/employees/:id",(req,res)=>{
    connection.query("SELECT * FROM employee WHERE id=?",[req.params.id],(err, rows)=>{
        if(err){
            console.log(err)
        }else{
          //  console.log(rows)
          res.send(rows)
        }
    })
})

app.delete("/employees/:id",(req,res)=>{
    connection.query("DELETE FROM employee WHERE id=?",[req.params.id],(err, rows)=>{
        if(err){
            console.log(err)
        }else{
          //  console.log(rows)
          res.send(rows)
        }
    })
})

app.post("/employees",(req,res)=>{
    const employee = req.body
    const employeeData = [employee.name, employee.salary]
    connection.query("INSERT INTO employee(name, salary) values(?)",[employeeData],(err, rows)=>{
        if(err){
            console.log(err)
        }else{
          //  console.log(rows)
          res.send(rows)
        }
    })
})

app.patch("/employees",(req,res)=>{
    const employee = req.body
    connection.query("UPDATE employee SET ? WHERE id="+employee.id,[employee],(err, rows)=>{
        if(err){
            console.log(err)
        }else{
          //  console.log(rows)
          res.send(rows)
        }
    })
})

app.put("/employees",(req,res)=>{
    const employee = req.body
    connection.query("UPDATE employee SET ? WHERE id="+employee.id,[employee],(err, rows)=>{
        if(err){
            console.log(err)
        }else{
          //  console.log(rows)
          if(rows.affectedRows === 0){
            const employeeData = [employee.name, employee.salary]
            connection.query("INSERT INTO employee(name, salary) values(?)",[employeeData],(err, rows)=>{
                if(err){
                    console.log(err)
                }else{
                  //  console.log(rows)
                  res.send(rows)
                }
            })
          }else{
          res.send(rows)}
        }
    })
})
app.listen(3000, ()=> console.log("Server is running on port 3000."))