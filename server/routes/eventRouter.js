const express = require('express');
const { getAllEvents, getEventById, addEvent } = require('../controller/eventController');
const isLoggedIn = require('../middleware/isLoggedIn');
const router=express.Router();

router.get('/getAllEvents',isLoggedIn,getAllEvents)

router.get('/getEvent/:id',isLoggedIn,getEventById)

router.post('/addEvent',isLoggedIn,addEvent)

module.exports=router