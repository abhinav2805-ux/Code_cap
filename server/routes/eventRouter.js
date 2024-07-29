const express = require('express');
const { getAllEvents, getEventById, addEvent } = require('../controller/eventController');
const router=express.Router();


router.get('/getAllEvents',getAllEvents)

router.get('/getEvent/:id',getEventById)

router.post('/addEvent',addEvent)

module.exports=router