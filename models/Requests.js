const mongoose = require ('mongoose');
const User = require('./User');
const { ARRAY } = require('sequelize');
const { boolean } = require('mathjs');
const RequestsrsSchema = new mongoose.Schema ({
    userId : {
        type : String,
        ref : "User",
    },
    date : {
        date: { type: Date, default: Date.now },
    },
    sentIt : {
        type: boolean, default: false

    },
    jobId: {
        type: String,
        ref: "jobs",
    },
});
const Requests = mongoose.model('Requests', RequestsrsSchema);

module.exports = Requests;