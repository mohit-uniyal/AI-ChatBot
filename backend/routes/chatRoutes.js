const { getPromptAnswer, getChats, clearChats } = require('../controllers/chatController');
const auth = require('../middlewares/auth');

const chatRouter=require('express').Router();

chatRouter.post('/getPromptAnswer', auth, getPromptAnswer);
chatRouter.get('/getChats', auth, getChats);
chatRouter.get('/clearChats', auth, clearChats);

module.exports=chatRouter;