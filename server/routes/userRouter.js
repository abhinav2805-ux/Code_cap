const express = require('express');
const { editProfile, getProfile, signUp, signIn } = require('../controller/userController');
const router=express.Router();


router.get('/getProfile/:username',getProfile)

router.post('/editProfile/:username',editProfile)

router.post('/signUp',signUp)

router.post('/signIn',signIn)

router.post('signOut',)

module.exports=router