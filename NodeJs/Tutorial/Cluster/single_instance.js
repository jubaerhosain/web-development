const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("GET");
    for (let i = 0; i < 1e8; i++) {
        // console
    }
    res.send(`${process.pid} sends Hello World`);
});

app.listen(3000, () => {
    console.log(`Worker ${process.pid} is listening on port 3000`);
});
