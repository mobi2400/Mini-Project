import express from 'express';
import jwt from 'jsonwebtoken';

const PORT = 3000;
const app = express();

app.use(express.json());
const jwtPassword = '123456';

const ALL_USERS = [
    {
        username: 'admin',
        password: '123456'
    },
    {
        username: 'user',
        password: '123456'
    },
    {
        username: 'guest',
        password: '123456'
    }
]

function userExists({ username, password }){
  if(ALL_USERS.find(user => user.username === username && user.password === password)){
    return true;
  }
  return false;
}
app.post("/signin", (req, res) => {
   const { username, password } = req.body;
   if(!userExists({ username, password })){
    return res.status(401).json({ error: "Invalid Credentials" });
   }
   const token = jwt.sign({ username }, jwtPassword, { expiresIn: '24h' });
   res.json({ token });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    if(!decoded){
        return res.status(401).json({ error: "Unauthorized Access" });
    }
    res.json({ users: ALL_USERS, requestedBy: username }); 
});

app.listen(PORT, () => {
    console.log(`http://localhost: ${PORT}`);
}); 
