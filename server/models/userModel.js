const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Username:{
        type: String,
        required: true,
        unique: true,
    },
    Email:{
        type: String,
        required: true,
        unique: true,
    },
    Password:{
        type: String,
        required: true,
    },
    Gender:{
        type: String,
        default: "",
    },
    College:{
        type: String,
        default: "",
    },
    Branch:{
        type: String,
        default: "",
    },
    Github:{
        type: String,
        default: "",
    },
    Skill:{
        type: Array,
        default: [],
    },
    Year:{
        type: Number,
        default: null,
    },
    LinkedIn:{
        type: String,
        default: "",
    },
    Role:{
        type: String,
        default: "",
    },
    Status:{
        type: String,
        default: "Available",
    }
})

module.exports=mongoose.model("UserModel",userSchema);