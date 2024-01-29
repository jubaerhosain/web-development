const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("Root");
    } else if (req.url == "/about") {
        res.write("About");
    } else {
        res.write("Not found!");
    }
    res.end();
});

server.listen(3000);

console.log("Server is running");
