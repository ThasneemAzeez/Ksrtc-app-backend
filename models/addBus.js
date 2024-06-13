const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "busname":{type:String,required:true},
        "busroute":{type:String,required:true},
        "drivername":{type:String,required:true}
        
    }
)
let addbusmodel=mongoose.model("addbuses",schema)
module.exports={addbusmodel}