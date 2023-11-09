const mongoose = require("mongoose")
const phoneSchema = mongoose.Schema({
    phone_name: String,
    phone_color: String,
    phone_cost: Number
})
module.exports = mongoose.model("Phone",
phoneSchema)