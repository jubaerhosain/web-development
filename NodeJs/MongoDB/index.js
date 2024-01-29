const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const todoRouter = require("./routers/todoRouter");

// database connection with mongoose
mongoose.connect("mongodb://localhost/todo")
    .then(() => {
        console.log("Connection successful");
    })
    .catch((error) => {
        console.log(error);
    });

app.use("/todo", todoRouter);

// default error handler
app.use((error, req, res, next) => {
    if (res.headersSent) {
        next(error);
    } else {
        res.status(500).json({ error: error });
    }
});

app.listen(3000, () => {
    console.log("Listening on port: " + 3000);
});