const { GoogleGenerativeAI } = require("@google/generative-ai");
const User = require('./../models/userModel');

const getPromptAnswer = async (req, res) => {
    try {
        const { prompt } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_SECRET);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const geminiResponse = await result.response;
        const text = geminiResponse.text();
        const user = await User.findById(req._id);
        const chats = user.chats;
        chats.push({
            role: 'user',
            content: prompt
        });
        chats.push({
            role: 'bot',
            content: text
        });
        user.chats = chats;
        await user.save();
        res.status(200).json(user.chats);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getChats=async (req, res)=>{
    try{
        const user=await User.findById(req._id);
        const chats=user.chats;
        res.status(200).json(chats);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

const clearChats=async (req, res)=>{
    try{
        const user=await User.findById(req._id);
        user.chats=[];
        user.save();
        res.status(200).json(true);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = { getPromptAnswer, getChats, clearChats };