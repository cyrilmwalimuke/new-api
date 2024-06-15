import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors)
app.get('/',(req,res)=>{
    res.send("hello this is my first api")

})
app.listen(5000,()=>{
    console.log("Server is running on port 3000!")

})