// This repository will contain the data access logic for the User model.
//  handles database operations related to the User model

const User = require("../models/User");

class UserRepository {
    async createUser(userData) {
        return User.create(userData);
    }

    async getAllUsers() {
        return User.findAll();
    }

    async getUserById(userId) {
        return User.findByPk(userId);
    }

    async updateUser(userId, userData) {
        const user = await User.findByPk(userId);
        if (user) {
            return user.update(userData);
        }
        return null;
    }

    async deleteUser(userId) {
        const user = await User.findByPk(userId);
        if (user) {
            return user.destroy();
        }
        return null;
    }
}

module.exports = UserRepository;
