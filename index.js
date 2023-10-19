require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const Mainrouter=require('./Router/mainRouter')
const ejs=require('ejs')
const db=require('./db')

 let app=express()

 app.use(bodyParser.json())
 app.set('view engine',ejs)
 app.set('View','views')

app.use('/',Mainrouter)
app.use('/',(req,res)=>{
    res.redirect('/data')
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`)
})