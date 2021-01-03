const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const saltRounds =10;
const jwt = require('jsonwebtoken');
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
    },
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

userShema.methods.comparePassword =function(plainPassword,cb){
    //plainPassword 1234567     암호화된 비밀번호 $2b$10$4DiaGecw3EJ2hbPgOHjK..YTs0L.Q3ev2sbUsgfYIAeEKnw718BwG
    // 입력된 비밀번호를 암호화해서 데이터베이스의 비밀번호와 비교해야함
    bcrypt.compare(plainPassword,this.password, function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch);
    })
}
userShema.methods.generateToken =function(cb){
    //jsonwebtoken을 사용하여 token 생성하기
    const user =this;
    const token =jwt.sign(user._id.toHexString(), 'secretToken')

    user.token = token
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null,user)
    })

}
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
            })
        })
    }else{
        next()
    }
    
})

const User =mongoose.model('User',userShema)

module.exports ={User}