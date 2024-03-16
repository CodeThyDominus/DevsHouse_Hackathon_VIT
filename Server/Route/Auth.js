const express=require('express');
const Authrouter=express.Router();
const SignUp = require('../Controller/Auth/Signup');
const authLogin=require('../Controller/Auth/Login');
const RequestMoney=require('../Controller/MoneyRequest/Request');
const Updatebalance=require('../Controller/MoneyRequest/UpdateMoney');
const profile=require('../Controller/User/UserInfo');

Authrouter.post('/signup',SignUp);
Authrouter.post('/login',authLogin);
Authrouter.post('/request/:id',RequestMoney);
Authrouter.post('/update/:id',Updatebalance);
Authrouter.get('/profile/:id',profile);

module.exports=Authrouter;