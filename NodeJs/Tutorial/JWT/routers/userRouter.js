const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();
const userSchema = require("../schemas/userSchema");
const checkLogin = require("../middlewares/checkLogin");
const User = mongoose.model("User", userSchema);

// checkLogin is a middleware to authenticate token
userRouter.get("/", checkLogin, async (req, res) => {
    console.log(req.username, req.id);
    res.end("Correct");
});

// get all user
userRouter.get("/all", async (req, res) => {
    try {
        // todos: name of key inside userSchema
        const data = await User.find().populate("todos");
        console.log(data);
        res.status(200).json({
            message: "Users gets successfully",
            todos: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "There was a server side error!",
        })
    }
});

userRouter.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
        });
        await user.save();
        res.status(200).json({
            message: "User Sign-Up successfull!",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sign-Up failed!",
        })
    }
});

userRouter.post("/login", async (req, res) => {
    try {
        const user = await User.find({ username: req.body.username }).limit(1);
        if (user && user.length > 0) {
            const validPassword = await bcrypt.compare(req.body.password, user[0].password);
            if (validPassword) {
                const token = jwt.sign({
                    username: user[0].username,
                    userId: user[0]._id,
                }, process.env.JWT_SECRETE_KEY, {
                    expiresIn: "1h",
                });

                res.status(200).json({
                    token: token,
                    message: "User Login successfull!",
                })
            } else {
                res.status(500).json({
                    message: "Authentication failed!",
                })
            }
        } else {
            res.status(500).json({
                message: "Authentication failed!",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Authentication failed!",
        })
    }
});

module.exports = userRouter;