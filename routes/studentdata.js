const express = require('express');
const router = express.Router()
const authuser = require('../middleware/authuser')
const Student = require("../models/studentData");


router.post('/data',authuser,async(req,res)=>{
    try {
    
        let student = await Student.insertMany(req.body)
        res.status(200).json({sucess:true ,student})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

router.get('/getstudent',authuser,async(req,res)=>{
    try {
        let student = await Student.find()
        res.status(200).json({sucess:true,student})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
})

router.put('/updatestudent', authuser,async(req,res)=>{
    try {
        

    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
})
router.delete('/deletestudent/:id',authuser,async(req,res)=>{

    // try {
    //     const student = await Student.findById(req.params.id);
    //     if (student.studentId === req.body.studentId) {
    //       await student.deleteOne();
    //       res.status(200).json("the student Info has been deleted");
    //     } else {
    //       res.status(403).json("you can delete only your student Info");
    //     }
    //   } catch (err) {
    //     console.error(error)
    // res.status(500).json({message:"Internal server error"})
    //   }




try {
    
    let student = await Student.findById(req.params.id);
    if(!student) {return res.status(404).json({message:"student not found"})}
    // if(student.user.toStrig() !== req.params.id){
    //     return res.status(401).json({message:"Not Allowed"})
    // }
    student = await Student.findByIdAndDelete(req.params.id)
    res.json({sucess:"student has been deleted",res:student});
} catch (error) {
    console.error(error)
    res.status(500).json({message:"Internal server error"}) 
}
})

module.exports = router






























// router.post('/data',validate,async(req,res)=>{
//     try {
//         // const {name,age,contactno,studentId} = req.body
//         let student = await Student.insertMany({name:req.body.name,
//             age:req.body.age,
//             contactno:req.body.contactno,
//             studentId:req.body.studentId
//         })
//         // console.log(req.body)
//         res.status(200).json({student}) 
//     } catch (error) {
//         console.error(error)
//         res.status(500).send({message:"Internal Server error"})
//     }
// })

