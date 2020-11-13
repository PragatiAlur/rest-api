const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;
const URL = "mongodb+srv://pragati:pragati@cluster0.8hlqy.mongodb.net/userDetails?retryWrites=true&w=majority";

const userPostRoutes = require('./routes/api/users');
const userGetRoutes = require('./routes/api/getUser');
const userDeleteRoutes = require('./routes/api/deleteUser');


mongoose.connect(URL)
    .then(()=>{
        console.log("MongoDB connected");
    }).catch((err)=>{
        console.log("Couldn't connect");
        console.log(err);
    })

app.use(express.json());
app.use('', userPostRoutes);
app.use('', userGetRoutes);
app.use('', userDeleteRoutes);





app.get('/', (rej, res) => {
    res.send("Hello from node");
})


app.listen(PORT, ()=> {
    console.log("Running");
})