const mongoose=require('mongoose')


const Demo=mongoose.model('Name',{
    name:{type:String,required:true}
})

module.exports=Demo