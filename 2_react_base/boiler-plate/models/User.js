const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const saltRounds =10;
const userShema =mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:{
        image:String,
        token:{
            type:String
        }
    },
    tokenExp:{
        type:Number
    }
})

userShema.pre('save',function(next){
    let user =this;

    if(user.isModified('password')){
    //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, (err, salt)=> {
            if(err) return next(err)
            bcrypt.hash(user.password,salt, (err, hash)=> {
                // Store hash in your password DB.
                if(err) return next(err)
                user.password = hash;
                next();
            });
        });
    }
    
})

const User =mongoose.model('User',userShema)

module.exports ={User}