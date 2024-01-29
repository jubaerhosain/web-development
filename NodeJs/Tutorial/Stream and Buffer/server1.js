const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(__dirname + "/index.html");
    readStream.pipe(res);
});

server.listen(3000);

console.log("Server is running");
