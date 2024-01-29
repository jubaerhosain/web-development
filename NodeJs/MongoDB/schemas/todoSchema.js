const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// never use arrow function here
const todos = "";

console.log(todos);

// instance methods 
todoSchema.methods = {
    findActiveTodos: function () {
        console.log("inside findActiveTodos");
        return mongoose.model("Todo").find({ status: "active" });
    },
    findActiveTodosByCallback: function (callback) {
        console.log("inside findActiveTodosByCallback");
        console.log(this);
        mongoose.model("Todo").find({ status: "active" }, callback);

        // this not works here
        // this.find({status: "active"}, callback);
    }
}

// static methods
todoSchema.statics = {
    findByStatic: function (callback) {
        return this.find(callback);
    }
}

// query helpers
todoSchema.query = {
    byLanguage: function (language) {
        return this.find({ title: new RegExp(language, "i") });
    }
}

module.exports = todoSchema;