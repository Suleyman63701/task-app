
const express = require('express')
const mongoose = require('./db/mongoose')
const User=require('./models/user');
const Task=require('./models/task')



const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.post('/users', (req,res)=>{
    //console.log(req.body)
   const user = new User(req.body)

   user.save().then((user)=>{
    res.status(201).send(user)
   }).catch((e)=>{
    res.status(400).send(e)
    })
})

app.get('/users', (req, res)=>{
    User.find({}).then((users)=>{
        res.status(200).send(users)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.get('/users/:id', (req,res)=>{
    User.findById(req.params.id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })
})


app.post('/tasks', (req,res)=>{
    const task=new Task(req.body)
    task.save().then((task)=>{
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res)=>{
    Task.find({}).then((task)=>{
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req,res)=>{
    Tasks.findById(re.params.id).then((task)=>{
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})

