
const express= require("express")
const bookRoute=require("./routes/bookRoute")

require("./database/connection")

 app.use=(express.json())
app.use("",bookRoute)
const app = express()

//  app vaneko indireclty express lai call garya hoo














app.listen(4000, function()
{
    console.log("succesfully connected at port no 3000");
  
    
})