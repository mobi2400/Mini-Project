import mongoose from "mongoose";

const option ={
    discriminatorKey: "userType",
}

const UserSchema = new mongoose.Schema({
    FirstName :{
        type: String,
        required: true,
    },
    LastName :{
        type: String,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password :{
        type: String,
        required: true,
    },
    address :{
        street :{
            type: String,
        },
        pincode :{
            type: Number,
        },
        city :{
            type: String,
        },
        country :{
            type: String,
        },
    }
}, option);

export default mongoose.model("User", UserSchema);