import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    firstName : {
        type: String,
        required: true,
        maxlength: 15,
    },
    lastName : {
        type: String,
        required: true,
        maxlength: 15,
    
    }
})

export default mongoose.model("User", UserSchema);