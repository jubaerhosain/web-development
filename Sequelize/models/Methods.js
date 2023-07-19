const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define("User", {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
});


// class method
User.classMethod = function () {
    return "ClassMethod";
}


console.log(User.classMethod());

// instance method
User.prototype.getAge = function () {
    return new Date();
};

const jane = User.build({ username: "Jane" });
// await jane.save();
// console.log('Jane was saved to the database!');

console.log(jane.toJSON());
console.log(jane.getAge());
console.log(jane instanceof User); // true
console.log(jane.username); // "Jane"
