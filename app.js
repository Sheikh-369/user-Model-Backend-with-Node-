import express from "express"
const app=express()

// app.use(express.json())
import userRoute from "./routes/userRoute.js"
app.use("",userRoute)


app.listen(7510,()=>{
    console.log("Server is running at port number 7510.")
})
