import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import connectDB from '../db/connectDB.js';

export default async function userAuth (req, res, next) {

 const token = req.header("Authorization").split(" ")[1];
  if(!token){
    return res.status(401).json({ error: "Unauthorized Access" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if(!decoded){
    return res.status(401).json({ error: "Unauthorized Access" });
  }
  const user = await User.findById(decoded.id);
  if(!user){
    return res.status(401).json({ error: "Unauthorized Access" });
  }
  req.token = token;
  req.user = user;
  next();
}