const appRouter=require('express').Router();
const { getPromptAnswer } = require('../controllers/chatController');
const chatRouter = require('./chatRoutes');
const userRoutes = require('./userRoutes');

appRouter.use('/user', userRoutes);
appRouter.use('/chat', chatRouter);

module.exports=appRouter;