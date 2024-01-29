const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();
const userController = new UserController();

router.post("/", userController.createUser.bind(userController));
router.get("/", userController.getAllUsers.bind(userController));
router.get("/:id", userController.getUserById.bind(userController));
router.put("/:id", userController.updateUser.bind(userController));
router.delete("/:id", userController.deleteUser.bind(userController));

module.exports = router;
