const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected to database');
    }catch(err){
        throw new Error('Connection to database failed');
    }
}

module.exports = connectDB;