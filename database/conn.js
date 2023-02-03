const mongoose = require("mongoose")
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const connectDB = async () => {
    
    try{
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((data) => console.log(data))
    }
    catch(err){
        console.log(err);
    }

}

module.exports = connectDB