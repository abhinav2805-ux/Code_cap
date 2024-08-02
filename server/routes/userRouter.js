const express = require('express');
const { editProfile, getProfile, signUp, signIn, signout, findUsers } = require('../controller/userController');
const isLoggedIn = require('../middleware/isLoggedIn');
const router=express.Router();


router.get('/getProfile/:username',isLoggedIn,getProfile)

router.post('/editProfile/:username',isLoggedIn,editProfile)

router.post('/signUp',signUp)

router.post('/signIn',signIn)

router.post('/signOut',isLoggedIn,signout)

router.get('/findUsers',isLoggedIn,findUsers)

module.exports=router