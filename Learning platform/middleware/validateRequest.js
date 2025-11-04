import {z} from 'zod';

const addressSchema = z.object({
    street : z.string().min(10).max(70),
    pincode : z.number().max(999999),
    city : z.string(),
    country : z.string(),
});

const userSchema = z.object({
    FirstName : z.string(),
    LastName : z.optional(z.string()),
    email : z.string().email(),
    age : z.number().min(18),
    password : z.string().min(8),
    address : addressSchema,
});
const adminSchema = userSchema.extend({
    isAdmin : z.boolean(),  
    experience : z.number().min(5),
});

const CourseSchema = z.object({
    courseName : z.string(),
    courseDuration : z.number().min(10).max(101),
    coursePrice : z.number().min(1000),
    courseDescription : z.string().max(100),
    courseRating : z.number().min(1).max(5),
    courseAdmin : adminSchema,
});

export {
    addressSchema,
    userSchema,
    adminSchema,
    CourseSchema,
}