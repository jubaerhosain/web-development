const express = require("express");
const userRoutes = require("./app/routes/userRoutes");

const app = express();

// other app configurations

app.use("/users", userRoutes);

// start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
