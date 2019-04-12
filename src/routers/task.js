const express = require('express')
const Task = require('../models/task')
const mongoose = require('../db/mongoose')
const router = new express.Router()



router.post('/tasks', async(req,res)=>{
    const task=new Task(req.body)
    try{
        await task.save()
        res.send(task)


    }catch(e){
        res.send(e)
    }

})

router.get('/tasks', async (req, res)=>{
    
    try{
        const tasks=await Task.find({})
        res.status(200).send(tasks)
    }catch(e){
        res.status(500).send(e)
    }

})

router.get('/tasks/:id',async (req,res)=>{
    try{
        const task = await Task.findById(req.params.id)
        if(!task){
            res.status(404).send()
        }
            res.status(200).send(task)
    }catch(e){
            res.status(500).send(e)
    }
})

router.patch('/tasks/:id', async(req,res)=>{
        const _id=req.params.id
        
        if(!_id){
            res.status(504).send("Cant find ID")
        }
    try{
       const patchObj={completed:req.body}
       const task = await Task.findByIdAndUpdate(_id,req.body, {new:true, runValidators:true})
       if(!task){
           res.status(500).send()
       }
           res.status(200).send(task)
    }catch(e){
           res.status(404).send(e)
    }
    
})
module.exports = router