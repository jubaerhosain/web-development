// Controller handles the requests and invokes the repository methods

const UserRepository = require("../repositories/UserRepository");

class UserController {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(req, res) {
        try {
            const userData = req.body;
            const user = await this.userRepository.createUser(userData);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: "An error occurred" });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userRepository.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: "An error occurred" });
        }
    }

    async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await this.userRepository.getUserById(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: "An error occurred" });
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userRepository.updateUser(userId, userData);
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ error: "An error occurred" });
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const deletedUser = await this.userRepository.deleteUser(userId);
            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            return res.status(500).json({ error: "An error occurred" });
        }
    }
}

module.exports = UserController;
