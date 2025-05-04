
const express= require("express")
const app = express()
//  app vaneko indireclty express lai call garya hoo
require("./database/connection")

app.get("/books",(req,res)=>{
    res.json({
        name:"get the book sucesfully",
        
    })
})


app.post("/books", (req,res)=>{
    res.json({
        name:"book post sucessfully"
     
    })
})

app.patch("/books/:id", (req,res)=>{
    res.json({
        name:"book patch successfully enjoy"
        
    })
})

app.delete("/books/:id", (req,res)=>{
    res.json({
        name:"books deleted sucessfully"
        
    })
})











app.listen(3000, function()
{
    console.log("succesfully connected at port no 3000");
  
    
})