const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})




// const me = new User({
//     name:'SULEYMAN',
//     password:'PassWORD1',
//     email:'SULEYMAN@example.com'
// })
// me.save().then ((me)=>{
//     console.log(me)
// }).catch((e)=>{
//     console.log('error', e)
// })




// const dataTask = new Tasks({
//     description:'Eat lunch           ',
//     completed:false,
//     password:"Red12345!"
// })

// dataTask.save().then((task)=>{
//     console.log(task)
// }).catch((e)=>{
//     console.log(e)
// })
