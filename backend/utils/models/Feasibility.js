import mongoose from "mongoose";

const Feasibility = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    numberOfSites: {
        type: Number,
        required: true,
        min: 1
    },
    product: {
        type: String,
        enum: ["Business Connect", "Business Internet Fibre", "Business Internet Mall", "Business Internet Wireless", "IP Connect", "LAN Connect", "Business Internet LTE", "SD-WAN"],
        required: true
    },
    dateReceived: {
        type: Date,
        required: true,
    },
    dateCompleted: {
        type: Date,
    }
})