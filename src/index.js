
const express = require('express')
const mongoose = require('./db/mongoose')
const User=require('./models/user');
const Task=require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET request disabled')
//     }else{
//         next()
//     }
    
    
// })

//MAINTANCE MODE
// app.use((req,res,next)=>{
//     res.status(503).send('Site undermaintance come back again')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})

// const bcrypt=require('bcryptjs')
// //const bcrypt = require('bcrypt');
// const myFunction=async()=>{


// // const saltRounds = 10;
// // const myPlaintextPassword = 's0/\/\P4$$w0rD';
// // const someOtherPlaintextPassword = 'not_bacon';


// // const hashedPass=await bcrypt.hashSync(myPlaintextPassword, saltRounds, function(err, hash) {
// //     // Store hash in your password DB.
    
// //   });
// // console.log(hashedPass)
// // const isMatch =await bcrypt.compareSync(myPlaintextPassword, hashedPass)
// // console.log('matches: ', isMatch)

//     const saltRounds=10
//     const password='123pass'
//     const hashedPassword= await bcrypt.hashSync(password, saltRounds)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch= await bcrypt.compareSync(password, hashedPassword)

//     console.log(isMatch)
// }
//myFunction()

// const jwt=require('jsonwebtoken')

// const myFunction= async()=>{
//     const token = jwt.sign({_id:'abc123'}, 'finishmycourse',{expiresIn: '7 days'})
//     console.log(token)

//     const data=jwt.verify(token,'finishmycourse')
//     console.log(data)

// }

// myFunction()