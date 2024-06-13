const mongoose=require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "email":{type:String,required:true},
        "phno":{type:String,required:true},
        "gender":{type:String,required:true},
        "password":{type:String,required:true},
        "confirmpassword":{type:String,required:true}
        
    }
)
let ksrtcmodel=mongoose.model("ksrtcs",schema)
module.exports={ksrtcmodel}