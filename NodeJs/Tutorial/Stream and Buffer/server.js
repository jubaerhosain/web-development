const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        let html = `
            <html> 
                <body>
                    <form method="post" action="/process">
                        <input name="message" />
                    </form>
                </body>
            </html>
        `;
        res.write(html);
        res.end();
    } else if (req.url === "/process" && req.method === "POST") {
        const data = [];
        req.on("data", (buffer) => {
            data.push(buffer);
            console.log(buffer);
        });
        req.on("end", () => {
            console.log("Data received successfully!");
            const string = Buffer.concat(data).toString();
            console.log(string);
            res.write("Thanks for submitting");
            res.write(string);
            res.end();
        });
    } else {
        res.write("Not found!");
        res.end();
    }
});

server.listen(3000);

console.log("Server is running");
