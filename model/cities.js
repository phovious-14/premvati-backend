const mongoose = require("mongoose")
require("dotenv").config()

const schema = mongoose.Schema({
    cityName:{
        type:String,
        require:true
    },
    id:{
        type:Number,
        require:true
    }
})

// schema.pre("save",async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password,12)
//     }
//     next()
// })

// schema.methods.genAuthToken = async function(){
//     try{
//         let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
//         this.tokens = this.tokens.concat({token:token})
//         await this.save()
//         return token

//     }catch(err){
//         console.log(err)
//     }
// }


const cityModel = mongoose.model("cities", schema)

module.exports = { cityModel }