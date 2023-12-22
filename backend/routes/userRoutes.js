const { loginController, signupController, logoutController, isLoggedInController } = require('../controllers/userController');
const auth = require('../middlewares/auth');

const userRoutes=require('express').Router();

userRoutes.post('/login', loginController);
userRoutes.post('/signup', signupController);
userRoutes.get('/logout', logoutController);
userRoutes.get('/isLoggedIn', auth, isLoggedInController);

module.exports=userRoutes;