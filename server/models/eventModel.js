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
    },
    URI:{
        type: String,
        default: ""
    }
})

module.exports=mongoose.model("eventModel",eventSchema)
