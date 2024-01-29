const http = require("http");

const server = http.createServer();

server.on("connection", (socket) => {
    console.log("Hello Jubaer Hosain!");
});

server.listen(3000);

// console.log(server);
console.log("Server is running");
