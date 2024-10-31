const  server = require("express")
const app =server()
require("dotenv").config()
const port = process.env.PORT ||4500;
const userRouter = require("./Routes/User.route")

// app.get("/",(req,res)=>{

// })
app.use("/user", userRouter)
app.listen(port,()=> {
    console.log(`server is running on localhost:${port}`);
})