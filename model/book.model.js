const mongoose=require("mongoose")

const bookSchema = mongoose.Schema({
    title:String,
    author: String,
    genre:String,
    description:String,
    price:Number
})

const BookModel = mongoose.model("myBook",bookSchema)

module.exports={BookModel}