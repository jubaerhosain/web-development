const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// attach app to the http server
const http = require("http").Server(app);
// attach http to the socket io
const io = require("socket.io")(http);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src/index.html"));
});

// create a new connection
io.on("connection", (socket) => {
    // console.log(socket);
    // console.log(socket.id);

    // console.log(io.sockets);
    // console.log(io);

    console.log("user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    // this will be received by "message" event
    socket.send("send");

    socket.on("message", (message) => {
        console.log("Client sent: " + message);
        socket.emit("message", "Server received " + message);
    });

    socket.emit("s1", "Server received");
    socket.emit("s2", "Server received ");
    socket.emit("s3", "Server received ");
});


http.listen(port, () => {
    console.log("listening on port " + port);
});
