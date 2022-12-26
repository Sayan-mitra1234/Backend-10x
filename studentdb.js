//student database

const mongoose=require('mongoose');
const classSchema= new mongoose.Schema({
    name:{type:String},
    classid:{type:Number},
    studentid:{type:Number}
})

const Student=mongoose.model('Student',classSchema);
module.exports=Student