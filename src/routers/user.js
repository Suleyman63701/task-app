const express = require('express')
const User = require('../models/user')
const mongoose = require('../db/mongoose')
const router = new express.Router()

router.post('/users', async (req,res)=>{
    
      const user =new User(req.body)
     try{
        await user.save()
         res.status(201).send(user)
         
     }catch(e){
         res.status(400).send(e)
     }
     //WITH PROMISE CHAINING
 //    user.save().then((user)=>{
 //     res.status(201).send(user)
 //    }).catch((e)=>{
 //     res.status(400).send(e)
 //     })
 })
 
 router.get('/users', async(req, res)=>{
     try{
         const users=await User.find({})
         res.status(200).send(users)
     }catch(e){
         res.send(400).send(e)
     }
     //WITH PROMISE CHAINING
     // User.find({}).then((users)=>{
     //     res.status(200).send(users)
     // }).catch((e)=>{
     //     res.status(400).send(e)
     // })
 })
 
 router.get('/users/:id', async(req,res)=>{
     const _id=req.params.id
     try{
        const user =await User.findById(_id)
        if(!user){
            return res.status(404).send()
         }
         res.status(200).send(user)
         }catch(e){
             res.status(500).send(e)
         }
         //WITH PROMISE CHAINING
     // User.findById(req.params.id).then((user)=>{
 
      
     //     if(!user){
     //         return res.status(404).send()
     //     }
     //     res.send(user)
     // }).catch((e)=>{
     //     res.status(500).send()
     // })
 })
 
 router.patch('/users/:id', async(req,res)=>{
     const updates = Object.keys(req.body)
     const allowedUpdates = ['email','age','name','password']
     const isValidOperation = updates.every((update)=>{
         return allowedUpdates.includes(update) 
     })
 
     const _id = req.params.id;
     if(!isValidOperation){
         return res.status(400).send({error:'invalid updates!'})
     }
 
     try{
     const user =await User.findByIdAndUpdate(_id, req.body,{new:true, runValidators:true})    
         if(!user){
             res.status(404).send()
         }
         res.status(200).send(user)
     }catch(e){
         res.status(400).send(e)
     }
 })
 
 router.delete('/users/:id', async(req,res)=>{
     
     try{
         const _id = req.params.id
         const deleteUser = await User.findByIdAndDelete(_id)
         if(!deleteUser){
             return res.status(404).send("test")
         }
         res.status(200).send(deleteUser)
     }catch(e){
         res.status(500).send(e)
     }
     
 })

 module.exports= router