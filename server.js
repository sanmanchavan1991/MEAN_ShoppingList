import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';
import itemRoutes from './routes/api/items';
//import {MONGO_URI} from './config/keys';

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const { MONGO_URI, MONGO_DB_NAME } = config;
const db = `${MONGO_URI}`;

const app=express();

//const itemRoutes =require('./routes/api/items');
//bodyparser middleware

app.use(bodyParser.json());

//DB config
//const db=require('./config/keys').MONGO_URI;
//const db=MONGO_URI;

console.log("MongoDB db==>",db)
//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
.then(()=>console.log("MongoDB connected.."))
.catch(err=>console.log("MongoDB Error==>",err))

//use routes
app.use('/api/items', itemRoutes);
if(process.env.NODE_ENV==='production')
{

    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`server started on port${port}`));
