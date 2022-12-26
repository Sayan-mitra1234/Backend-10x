//class database

const mongoose=require('mongoose');
const classSchema= new mongoose.Schema({
    class:{type:String},
    studentcount:{type:Number},
    id:{type:Number}
})

const Class=mongoose.model('Class',classSchema);
module.exports= Class