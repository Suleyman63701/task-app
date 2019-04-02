const mongoose=require('mongoose');
const validator=require('validator')

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            const pass=value.toLowerCase().includes('password')
            if(pass){
                throw new Error('Password can not contain "password"')
            }
        }
    },
    age:{
        type:Number,
        trim:true,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be positve number')
            }
        }

    }
})

module.exports =User