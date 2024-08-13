const eventModel = require("../models/eventModel");

const getAllEvents=async (req,res)=>{
    try {
        const events=await eventModel.find({});
        res.status(200).send(events)
    } catch (error) {
        console.log(error);
        res.status(500).json({"msg":"Server error"})
    }
}

const getEventById =async (req,res)=>{
    try {
        const eventId=req.params.id;
       // console.log(eventId);
        const event = await eventModel.findById(eventId);
        if(!event){
            res.status(404).json({"msg":"Not found"})
            return
        }
        res.status(200).send(event);
    } catch (error) {
        console.log(error);
        res.status(500).json({"msg":"Server error"})
    }
}

const addEvent= async (req,res)=>{
    try {
        const {Name,Mode,Image,lastDate,teamSize}=req.body
        const event=await eventModel.create({
            Name,
            Mode,
            Image,
            lastDate,
            teamSize,
            URI,
        })
        res.status(200).send(event);
    } catch (error) {
        console.log(error);
        res.status(500).json({"msg":"Server error"})
    }
}

// edit event remaiming

module.exports={addEvent,getAllEvents,getEventById}