const router=require('express').Router()
const Class=require('./db')

//create 

router.post('/v1/myclass',async (req,res)=>{
    try{
        const result=await Class.create({
            "class":req.body.class,
            "studentcount":req.body.studentcount,
            "id":req.body.id
        })
        res.status(201).json({
            status:"success",
            result
        })
    }catch(e){
        res.status(404).json(
            {
                status:"Failed",
              
            }
        )
    }
});

//find all class in array

router.get('/v1/myClass',async (req,res)=>{
    try{
        const result=await Class.find()
        res.status(200).json({
            status:"Success",
            result
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
        
        })
    }
})

//find with id

router.get('/v1/myClass/:id',async (req,res)=>{
    try{
        const result=await Class.find({_id:req.params.id})
        res.status(200).json({
            status:"Success",
            result
        })
    }catch(e){
        res.status(404).json({
            status:"there are no class in that id"
          
        })
    }
})

//delete 

router.delete('/v1/myClass/:id',async (req,res)=>{
    try{
        const result=await Class.deleteOne({_id:req.params.id})
        res.status(204).json({
            status:"Success",
            result
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
          
        })
    }
})


module.exports=router
