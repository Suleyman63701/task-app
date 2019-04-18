const mongoose=require('mongoose');
const validator=require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
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

userSchema.statics.findByCredentials = async (email, password)=>{
    const user=await User.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch=await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user
}

//hash plain text before saving
userSchema.pre('save', async function(next){
    
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password, 8)
    }
    
    next()
})

const User = mongoose.model('User',userSchema)

module.exports =User