const express = require('express');
const router = express.Router();

const Users = require('../../models/schema');

router.delete("/users/:id", async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        console.log("Here");
        if (!user)
            throw error(`No items found with ${req.params.id}`);
        res.status(200).json({success : true});
    }
    catch (err) {
        res.status(400).json({ message: "error" });
    }
})


module.exports = router;



