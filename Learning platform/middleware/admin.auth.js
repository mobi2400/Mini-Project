import jwt from 'jsonwebtoken';
import Admin from '../models/admin.model.js';
import connectDB from '../db/connectDB.js';

export default async function adminAuth (req, res, next) {

 const token = req.header("Authorization").split(" ")[1];
 if(!token){
    return res.status(401).json({ error: "Unauthorized Access" });
 }
 const decoded = jwt.verify(token, process.env.JWT_SECRET);
 const admin = await Admin.findById(decoded.id);
 if(!admin){
    return res.status(401).json({ error: "Unauthorized Access" });
 }
 req.token = token;
 req.admin = admin;
 next();

}
