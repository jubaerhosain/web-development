import express from "express";
import User from "./User.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://mongodb:27017/first_app").then(() => {
    console.log("Successfully connected to MongoDB...");
});

app.get("/", (req, res) => {
    res.end("Welcome to the docker world!");
});

app.post("/", async (req, res) => {
    try {
        const user = new User({
            name: "Jubaer",
            email: "jubaer@gmail.com",
            password: "pass",
        });
        await user.save();
        res.json(user);
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred");
    }
});

app.listen(3000, () => {
    console.log("Listening to port number 3000...");
});

export default app;
