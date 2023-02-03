const mongoose = require("mongoose")
require("dotenv").config()

const schema = mongoose.Schema({
    age: String,
    gender: String,
    order: String,
    qualityfood: String,
    tasteoffood: String,
    servingmethod: String,
    staffbehave: String,
    cleanliness: String,
    likedproduct: String,
    suggestion: String,
    contactnumber: String,
    // image:{
    //     avatar: {
    //         type: String
    //     },
    //     cloudinary_id: {
    //         type: String
    //     }
    // },
    image: String,
    cityId: String
})


const feedbackModel = mongoose.model("feedback", schema)

module.exports = { feedbackModel }