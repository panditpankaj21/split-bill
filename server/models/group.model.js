const mongoose = require("mongoose")

const groupMemberSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    currentBalance:{
        type: Number,
        required: true,
        default: 0,
    }
})

const groupSchema = new mongoose.Schema({
    groupName:{
        type: String,
        required: true,
    },
    symbol:{
        type: String,
        required: true,
    },
    groupMembers:[
        groupMemberSchema
    ],
    totalGroupSpending:{
        type: Number,
        required: true,
    }
}, {timestamps: true})

const Group = mongoose.model("group", groupSchema);

module.exports = Group