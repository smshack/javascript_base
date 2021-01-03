const express = require('express');
const app = express();
const port =5000

const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://jarry:<password>@cluster0.q8ptt.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', function(req, res) {
  res.send('hello world');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))