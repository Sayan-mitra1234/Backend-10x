

const app=require("./app");

const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Class",{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database connected Successfully")
})

app.listen(3000,()=>{console.log("Server Running at port 3000")})
