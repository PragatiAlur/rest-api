const express = require('express');
const router = express.Router();

const Users = require('../../models/schema');


router.get('/users', async (req,res) => {
    try{
        const users = await  Users.find();
        if(!users)
            throw Error("No users to display!");
        res.status(200).json(users);
    }catch(err){
        res.status(400).json({
            message : err
        });
    }
});


router.get('/users/:id', async (req,res) => {
    try {
        const users = await Users.findById(req.params.id);
        if (!users)
            throw error("No items");
        res.status(200).json(users);
    }
    catch (err) {
        res.status(400).json({ message: "error" });
    }
});

module.exports = router;