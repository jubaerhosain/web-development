const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const dotenv = require("dotenv");

const userRouter = require("./routers/userRouter");
const todoRouter = require("./routers/todoRouter");

const app = express();
dotenv.config();          // to access process.env.....
app.use(express.json());
app.use(bodyparser.json());

// database connection with mongoose
// creates a databse named "jwt" if not exists
mongoose.connect("mongodb://localhost/jwt")
    .then(() => {
        console.log("Connection successfull on users database");
    })
    .catch((error) => {
        console.log(error);
    });

app.use("/user", userRouter);
app.use("/todo", todoRouter);

// default error handler
app.use((error, req, res, next) => {
    console.log("Error: \n" + error);
    if (res.headersSent) {
        next(error);
    } else {
        res.status(500).json({ error: error });
    }
});

app.listen(3000, () => {
    console.log("Listening on port: " + 3000);
});