const mongoose=require('mongoose')

mongoose.connect(process.env.db).then(result=>{
    console.log('Database Connected Succesfully')
}).catch(err=>{
    console.log(err)
})