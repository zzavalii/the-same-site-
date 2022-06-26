
const express = require('express'); 
const mongoose = require('mongoose'); 
const config = require('config'); 
const User = require('./models/User'); 
const PORT = config.get('port') || 5000; 
 
const app = express(); 
 
app.use(require('cors')({origin: '*'})); 
app.use(express.urlencoded());

 
async function start() { 
    try { 
        await mongoose.connect(config.get('mongoURI')); 
        app.listen(PORT, () => { console.log(`App has been started on port ${PORT}`) }); 
    } 
    catch(e) { 
        console.log(e); 
    } 
} 
 
start(); 
 
app.get('/users', async (req, res) => { 
    try { 
        let users = await User.find(); 
        res.json(users); 
    } 
    catch(e) { 
        console.log(e); 
        res.status(500).send('Internal Server Error'); 
    } 
})


app.post('/register', async (req, res) => {
   try{
    let user = new User(req.body);
    await user.save();
    res.redirect("http://localhost:3000/dating")
   }
   catch(e){
     console.log(e);
     res.redirect("http://localhost:3000/dating")
   }
})
