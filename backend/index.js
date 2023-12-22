const express=require('express');
const dotenv =require('dotenv');
dotenv.config();
const cors=require('cors')
const connectDB = require('./db/connection');
const appRouter = require('./routes');
const cookieParser = require('cookie-parser');
const app=express();
const port=process.env.port || 4000;

//HTTP requests
//GET - Get data
//PUT - update, modify or mutate data
//POST - send data
//delete - send data to delete something

app.use(cors({
    origin: ["https://ai-chat-bot-frontend.vercel.app"],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api', appRouter);

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`server started at http://localhost:${port}`);
    })
})
.catch((err)=>{
    console.log(err);
})