const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../middlewares/checkLogin");

const todoRouter = express.Router();
todoRouter.use(express.json());
const todoSchema = require("../schemas/todoSchema");
const userSchema = require("../schemas/userSchema");
const Todo = mongoose.model("Todo", todoSchema);
const User = mongoose.model("User", userSchema);

// get all todos
todoRouter.get("/", checkLogin, async (req, res) => {
    try {
        // user: name of key inside todoSchema
        const data = await Todo.find({ status: "active" })
            .select({ _id: 0, __v: 0 })
            .populate("user", "name username -_id");
        res.status(200).json({ message: "Todos gets successfully!", data });
    } catch (error) {
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
});

// post single todo, checkLogin middleware
todoRouter.post("/", checkLogin, async (req, res) => {
    try {
        const newTodo = new Todo({
            ...req.body,
            user: req.userId,
        });

        // save todo
        const todo = await newTodo.save();

        // update todo to the user
        await User.updateOne({ _id: req.userId },
            {
                $push: {
                    todos: todo._id
                }
            });

        res.status(200).json({
            message: "Todo Inserted successfully!",
        })
    } catch (error) {
        res.status(500).json({
            error: "There was a server side error!",
        })
    }
});

// update single todo by id
todoRouter.put("/:id", async (req, res) => {
    console.log(req.params.id);
    /*
    try {
        await Todo.updateOne({ _id: req.params.id }, { $set: { status: "inactive" } });
        res.status(200).json({ message: "Todo Was Update successfully!" });
    } catch (error) {
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
    */

    try {
        // new true gives updated data otherwise data just before update
        const result = await Todo.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { status: "inactive" } },
            { new: true });
        res.status(200).json({ message: "Todo Was Update successfully!", result });
    } catch (error) {
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
});

// delete single todo by id
todoRouter.delete("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await Todo.deleteOne({ _id: req.params.id }).select({ _id: 0, __v: 0 });
        res.status(200).json({ message: "Todo deleted successfully!", data });
    } catch (error) {
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
});

module.exports = todoRouter;