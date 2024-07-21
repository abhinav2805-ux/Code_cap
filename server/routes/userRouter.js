const express = require('express');
const { editProfile, getProfile } = require('../controller/userController');
const router=express.Router();


router.get('/getProfile/:username',getProfile)

router.post('/editProfile/:username',editProfile)

module.exports=router