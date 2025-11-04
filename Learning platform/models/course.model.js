import mongoose from "mongoose";
import Admin from "./admin.model.js";
   
const CourseSchema = new mongoose.Schema({
    courseName:{
        type: String,
        required: true,
    },
    courseDuration:{
        type: Number,
        required: true,
    },
    coursePrice:{
        type: Number,
        required: true,
    },
    courseDescription:{
        type: String,
        required: true,
    },
    courseRating:{
        type: Number,
        required: true,
    },
    courseAdmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    }
})

export default mongoose.model("Course", CourseSchema);
