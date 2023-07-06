const express = require("express")
const {connection} = require("./config/db")
const cors = require("cors")
const {bookRouter}=require("./routes/book.routes")

require("dotenv").config()

const app = express();

app.use(express.json())
app.use(cors())
app.use("/book",bookRouter)



app.listen(process.env.PORT,async ()=>{
    try {
       await connection
       console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})