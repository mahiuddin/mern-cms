import mongoose from "mongoose";

// schema
const userSchema = new mongoose.Schema(
    {
        username : { type:String, unique:true, required:true },
        createdat : { type: Date, required:true}
    }
)

// references to communicate with mongodb

const User = mongoose.model("User", userSchema);
export default User;
