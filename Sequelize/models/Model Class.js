const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../index");

class User extends Model {
    static classLevelMethod() {
        return "foo";
    }
    instanceLevelMethod() {
        return "bar";
    }
    getFullName() {
        return [this.firstName, this.lastName].join(" ");
    }
}

User.init(
    // Model attributes are defined here
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allow null defaults to true
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "User", // We need to choose the model name
    }
);

console.log(User.classLevelMethod()); // 'foo'


// On the other hand, User.build() creates a new instance of a model and associates 
// it with a Sequelize database connection. This means that you can use the save() 
// method on the instance to save it to the database. For example:
const user = User.build({ firstName: 'Jane', lastName: 'Doe' });


console.log(user.instanceLevelMethod()); // 'bar'
console.log(user.getFullName()); // 'Jane Doe'