const mongoose =require("mongoose");
const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:[true,"First name must be provided"],
    },
    lname:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:false
    }
});


module.exports=mongoose.model("User",userSchema);
