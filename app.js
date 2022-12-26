const express=require('express');
const app=express();
const classroute=require('../class');
const Student=require('./studentdb')

app.use(express.json());
app.use('/',classroute)

//create

app.post('/v1/myClass/myClassId/students', async (req,res)=>{
  
    try{
        const result=await Student.create({
            "name":req.body.name,
            "classid":req.body.classid,
            "studentid":req.body.studentid
        })
        res.status(201).json({
            status:"success",
            result
        })
    }catch(e){
        res.status(404).json(
            {
                status:"Failed"
              
            }
        )
    }
})

//find with id

app.get('/v1/myClass/myClassId/students/:id',async (req,res)=>{

    try{
        const result=await Student.find({_id:req.params.id})
        res.status(200).json({
            status:'Successful',
            result
        })

    }catch(e){
        res.status(404).json({
            status:'Failed'
        })
    }
})

//find all in array

app.get('/v1/myClass/myClassID/students',async (req,res)=>{

    try{
        const result=await Student.find()
        res.status(200).json({
            status:'Successful',
            result
        })

    }catch(e){
        res.status(404).json({
            status:'There are no students'
        })
    }
})

//update

app.put('/v1/myClass/myClassId/students/:id',async (req,res)=>{
    try{
        const result=await Student.updateOne({_id:req.params.id},{
            "name":req.body.name,
            "classid":req.body.classid,
            "studentid":req.body.studentid


        })
        res.status(204).json({
            status:"Successfull",
            result
        })
    }catch(e){
        res.status(404).json({
            status:"Failed"
        })
        
    }
})

//delete 

app.delete('/v1/myClass/myClassId/students/:id',async (req,res)=>{
    try{
        const result=await Student.deleteOne({_id:req.params.id})
        res.status(204).json({
            status:'Successful',
            result
        })
    }catch(e){
        res.status(404).json({
            status:"Failed"
        })
        
    }
})


module.exports=app