const express=require('express');
const SignUp = require('../Controller/Auth/Signup');
const authLogin=require('../Controller/Auth/Login');
const RequestMoney=require('../Controller/MoneyRequest/Request');
const Updatebalance=require('../Controller/MoneyRequest/UpdateMoney');
const Authrouter=express.Router();

Authrouter.post('/signup',SignUp);
Authrouter.post('/login',authLogin);
Authrouter.post('/request/:id',RequestMoney);
Authrouter.post('/update/:id',Updatebalance);

module.exports=Authrouter;