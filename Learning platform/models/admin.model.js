import mongoose from "mongoose";
import User from "./user.model.js";

const AdminSchema = new mongoose.Schema({
    isAdmin:{
        type: Boolean,
        required: true,
    },
    experience:{
        type: Number,
        required: true,
    }
})

export default User.discriminator("Admin", AdminSchema);
