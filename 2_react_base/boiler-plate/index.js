const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const port =5000
const {User} =require("./models/User")
const mongoose =require('mongoose')
const cookieParser = require('cookie-parser')


const config =require('./config/key')
// req.body의  정보를 가져와서
app.use(bodyParser.urlencoded({ extended:true}))
// body의 json 정보를 파싱하기 위해 사용하는 코드
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', function(req, res) {
  res.send('새해복 많이 받으세요');
});


app.post('/register', (req,res)=>{
    //회원가입시 필요한 정보들을 client 에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다
    const user = new User(req.body);
    // 정보들을 유저 모델에 저장이 됨
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    });
})

app.post('/login',(req,res)=>{
    //요청된 이메일이 database에 있는지 확인
    User.findOne({email:req.body.email},(err,user)=>{
        if(!user){
            console.log('요청된 이메일이 database에 있는지 확인')
            return res.json({
                loginSuccess:false,
                message:"제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
         //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인
         user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다"})

            //비밀번호 까지 맞다면 토큰을 생성하기
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다. 어디에?? 쿠키, 로컬 스토리지 ....
                // 쿠키에 하는게 좋은건 아니지만 일단 쿠키에다 저장하겠음
                res.cookie('x_auth',user.token)
                .status(200)
                .json({loginSuccess:true,userId:user._id})
            })
         })
    })
   


})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))