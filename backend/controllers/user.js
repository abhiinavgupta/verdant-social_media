const User = require("../models/user.js")

exports.register = async (req, res) => {
    try {
    const {
        first_name,
        last_name,
        email,
        password,
        username,
        bYear,
        bMonth,
        bDay,
        gender,
        }= req.body;
        const user = await new User({
        first_name,
        last_name,
        email,
        password,
        username,
        bYear,
        bMonth,
        bDay,
        gender
        }).save();
    res.json(user);
} catch(error) {
    res.status(500).json({message: error.message});
};
};
