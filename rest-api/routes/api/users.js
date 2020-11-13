const express = require('express');
const router = express.Router();

const Users = require('../../models/schema');

router.post('/users', async (req, res) => {
    const newUser = new Users(req.body);
    console.log(newUser);
    let fname = newUser.firstName;
    let lname = newUser.lastName;
    let email = newUser.email;
    let age = newUser.age;
    let flag = 0;
    console.log(lname.length)
    if (lname.length == 0) {
        console.log("No last name");
        newUser.lastName = "NA";
    }
    if (fname.length == 0 || email.length == 0) {
        console.log("Fname and email cannot be null");
        flag = 1;
    }
    if (age <= 21 && age >= 60) {
        console.log("Age is invalid")
        flag = 1;
    }
    if (flag == 0) {
        try {
            const user = await newUser.save();
            if (!user)
                throw Error("Something went wrong while saving user details!");
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json({
                message: error
            });
        }
    } else {
        res.status(400).json({
            message: "Invalid Input"
        })
    }
})


router.patch("/users/:id", async (req, res) => {
    const newUser = Users(req.body);
    console.log(newUser);
    let fname = newUser.firstName;
    let lname = newUser.lastName;
    let email = newUser.email;
    let age = newUser.age;
    let flag = 0;
    console.log(lname.length)
    if (lname.length == 0) {
        console.log("No last name");
        newUser.lastName = "NA";
    }
    if (fname.length == 0 || email.length == 0) {
        console.log("Fname and email cannot be null");
        flag = 1;
    }
    if (age <= 21 && age >= 60) {
        console.log("Age is invalid")
        flag = 1;
    }
    if (flag == 0) {
    try {
        const users = await Users.findByIdAndUpdate(req.params.id, req.body);
        if (!users)
            throw error("Something went wrong while updating");
        res.status(200).json(users);
    }
    catch (err) {
        res.status(400).json({ message: "error" });
    }
}
else {
    res.status(400).json({ message: "Invalid Input" });
}
})



module.exports = router;