const express=require("express")
const mongoose=require("mongoose")
const {BookModel}=require("../model/book.model")

const bookRouter=express.Router();


bookRouter.post("/add",async(req,res)=>{
    try {
        const data=req.body
        const books=new BookModel(data)
        await books.save()
        res.status(200).send({msg:"Book added"})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

bookRouter.get("/",async(req,res)=>{
    try {
        const books=await BookModel.find()
        res.send(books)
    } catch (error) {
        
    }
})


bookRouter.delete("/delete/:bookId",async(req,res)=>{
    try {
        const {bookId} = req.params
        await BookModel.findByIdAndDelete({_id:bookId})
        res.status(200).send({msg:"book deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
   
})

bookRouter.get("/sort",async(req,res)=>{
    const {sort}=req.query
    let val=sort==="asc"?1:-1
    const books=await BookModel.find().sort({price:val})
    res.send(books)
})

bookRouter.get("/genre",async(req,res)=>{
    const {genre}=req.query
    let filter=genre?{genre}:{}
    const books=await BookModel.find(filter)
    res.send(books)
})

module.exports={bookRouter}