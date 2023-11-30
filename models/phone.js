const mongoose = require("mongoose")
const phoneSchema = mongoose.Schema({
    phone_name:  { type: String, minlength: 3 },
    phone_color: { type: String, required: true },
    phone_cost: { type: Number, required: true }
})
module.exports = mongoose.model("Phone",
phoneSchema)