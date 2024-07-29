const mongoose = require('mongoose');

const eventSchema=mongoose.Schema({
    Name:{
        type:String,
        required: true,
    },
    Mode:{
        type:String,
        default:"TBD"
    },
    Image:{
        type:String,
        default:"TBD"
    },
    lastDate:{
        type: Date,
    },
    teamSize:{
        type: Number,
        default:"TBD"
    }
})

module.exports=mongoose.model("eventModel",eventSchema)
