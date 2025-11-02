import express from 'express';
import { z } from 'zod';

const app = express();
app.use(express.json());
const PORT = 3000;

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


app.get('/', (req, res) => {
    res.send('Welcome to Zod Validation');
});
app.post('/user', (req, res) => {
    const { FirstName, LastName, email, age, password, address } = req.body;
    const result = userSchema.safeParse(req.body);
    if(result.success){
        res.send(result.data);
    }else{
        res.status(400).json({error:"check your data Inputs"});
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost: ${PORT}`);
});
