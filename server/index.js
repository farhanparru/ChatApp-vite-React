const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require("./Routes/userRouter")
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use("/api/users",userRouter)

app.get("/",(req,res)=>{
   res.send('Welcome our Chat api')
})



const port = process.env.PORT ||3000
const uri = process.env.ATLAS_URI;



app.listen(port,(req,res)=>{
   console.log(`Server running on port...:${port}`);
})  
     
mongoose.connect(uri,{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>console.log("MongoDb connection established🌐")).catch((error)=>console.log('MongoDb connection failed:',error.message))
