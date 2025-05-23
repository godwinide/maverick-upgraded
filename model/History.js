const { model, Schema } = require("mongoose");

const HistorySchema = new Schema({
    type: {
        type: String,
        required: true,
        default: "Null"
    },
    note: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false,
        default: "pending"
    },
    date: {
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = History = model("History", HistorySchema);