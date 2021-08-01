const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();


//bodyparser middleware
app.use(bodyParser.json());

//DB config
const db=require('./config/keys').MONGO_URI
console.log("MongoDB db==>",db)
//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
.then(()=>console.log("MongoDB connected.."))
.catch(err=>console.log("MongoDB Error==>",err))



const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`server started on port${port}`));
