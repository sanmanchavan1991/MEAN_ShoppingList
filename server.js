import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import config from './config';


import itemRoutes from './routes/api/items';
import userRoutes from './routes/api/users';
import authRoutes from './routes/api/auth';


const { MONGO_URI, MONGO_DB_NAME,PORT,NODE_ENV } = config;
const db = `${MONGO_URI}`;

const app=express();

app.use(express.json());


console.log("MongoDB db==>",db)
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })
.then(()=>console.log("MongoDB connected.."))
.catch(err=>console.log("MongoDB Error==>",err))



//use routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

if(NODE_ENV==='production')
{

    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const port=PORT||5000;
app.listen(port,()=>console.log(`server started on port${port}`));
