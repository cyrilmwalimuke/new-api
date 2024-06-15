import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors)
app.get('/',(req,res)=>{
    res.send("hello thus is my first api")

})
app.listen(3000,"Server is running on port 3000!")