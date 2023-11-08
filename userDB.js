require("dotenv").config();
const connectDB = require("./db/connect");
const user= require("./models/user");
const UserJson=require("./user.json");

const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await user.create(UserJson);
        console.log("Success");
        
    } catch (error) {
        console.log(error);
        
    }
}
start();