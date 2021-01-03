const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const port =5000
const {User} =require("./models/User")
const mongoose =require('mongoose')

const config =require('./config/key')
// req.body의  정보를 가져와서
app.use(bodyParser.urlencoded({ extended:true}))
// body의 json 정보를 파싱하기 위해 사용하는 코드
app.use(bodyParser.json())

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))