const express = require("express");
const mongoose = require("mongoose");

// we also can use callback instead of async/awai
// callback use korle async/await use kora lagbena

const todoRouter = express.Router();
todoRouter.use(express.json());

const todoSchema = require("../schemas/todoSchema");

// returns a class
// name convention singular form (not Todos)
// a document will create name of "todos" (lowercase letter and an extra s)
const Todo = mongoose.model("Todo", todoSchema);

// get all todos
todoRouter.get("/", async (req, res) => {
    try {
        // const data = await Todo.find({ status: "active" }).select({ _id: 0, __v: 0 }).limit(2);
        const data = await Todo.find({ status: "active" }).select({ _id: 0, __v: 0 });
        res.status(200).json({ message: "Todos gets successfully!", data });
    } catch (error) {
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
});

// find active todos [declared before get.("/:id") param]
todoRouter.get("/active", async (req, res) => {
    try {
        const newTodo = new Todo();
        const data = await newTodo.findActiveTodos().select({ _id: 0, __v: 0 });
        res.status(200).json({ message: "Active Todos gets successfully!", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
});

// find active todos using callback
todoRouter.get("/active-callback", (req, res) => {
    // const newTodo = new Todo("Todo"); NOT WORKS
    const newTodo = new Todo();
    newTodo.findActiveTodosByCallback((error, data) => {
        if (error) {
            res.status(500).json({ error: 'There was a Server Side Error!' })
        } else {
            res.status(200).json({ message: "Active Todos gets successfully!", data });
        }
    });
});

// find all todos using static
todoRouter.get("/static", (req, res) => {
    Todo.findByStatic((error, data) => {
        if (error) {
            res.status(500).json({ error: 'There was a Server Side Error!' })
        } else {
            res.status(200).json({ message: "Active Todos gets successfully!", data });
        }
    });
});

// by language query helper
todoRouter.get("/language", async (req, res) => {
    try {
        const data = await Todo.find().byLanguage("Todo");
        res.status(200).json({ message: "Active Todos gets successfully!", data });
    } catch (error) {
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
});


// get a todo by id
todoRouter.get("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await Todo.find({ _id: req.params.id }).select({ _id: 0, __v: 0 });
        res.status(200).json({ message: "Todos gets successfully!", data });
    } catch (error) {
        res.status(500).json({ error: 'There was a Server Side Error!' })
    }
});

// post single todo
todoRouter.post("/", (req, res) => {
    const newTodo = new Todo(req.body);
    console.log(req.body);
    newTodo.save((error) => {
        if (error) {
            console.log(error);
            res.status(500).json({
                error: "There was a server side error!",
            })
        } else {
            res.status(200).json({
                message: "Todo Inserted successfully!",
            })
        }
    });
});

// post multiple todo
todoRouter.post("/many", (req, res) => {
    // req.body array of json object
    Todo.insertMany(req.body, (error) => {
        if (error) {
            console.log(error);
            res.status(500).json({
                error: "There was a server side error!",
            })
        } else {
            res.status(200).json({
                message: "Todos Inserted successfully!",
            })
        }
    });
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