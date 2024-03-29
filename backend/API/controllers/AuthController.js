const { User } = require("../models/userModel");

exports.registerUser = (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Please enter unique email !",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully Registered !"
            });
        }
    });
}