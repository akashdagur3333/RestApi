const express=require('express')
let route=express.Router()
let Demo=require('../model/demo')


//GET REQUEST
route.get('/data',(req,res)=>{
   Demo.find().then(result=>{
    res.json(result)
   }).catch(err=>{
    console.log(err)
   })
})

//POST REQUEST
route.post('/data',(req,res)=>{
    var demo=new Demo({
        name:req.body.name
    })
    demo.save().then(result=>
        res.json(result)
    ).catch(err=>res.send(err))
})

//PUT REQUEST
route.put('/data/:id',(req,res)=>{
    Demo.findByIdAndUpdate(req.params.id,{
        name:req.body.name
    }).then(result=>res.json(result)).catch(err=>res.send(err))
    
})


//DELETE REQUEST
route.delete('/data/:id',(req,res)=>{
    Demo.findByIdAndDelete(req.params.id).then(result=>res.send({message:'Data Deleted successfully'})).catch(err=>res.send(err))
})

module.exports=route