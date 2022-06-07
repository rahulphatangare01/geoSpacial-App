const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    contact:{type:Number,required:true},
    studentId:{type:String,required:true},
    createdAt:{ type:Date,default:Date.now}
})

const Student = mongoose.model("student", studentSchema);
module.exports= Student
