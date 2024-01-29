/**
 * Title: Request Parser
 * Description: A REST API parse request
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const url = require("url");
const http = require("http");
const {StringDecoder} = require('string_decoder');

// App Object -> Module Scaffolding
const app = {};

// Configaration Object
app.config = {
    port: 3000,
};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleRequestResponse);
    server.listen(app.config.port, () => {
        console.log(`Listening to port number: ${app.config.port}`);
    });
};

// Hanle Request Response
app.handleRequestResponse = (req, res) => {
    // request handling
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname.replace(/^\/+|\/+$/g, "");    // replace starting and ending '/'
    const reqMethod = req.method.toLowerCase();
    const queryObject = parsedURL.query;
    const headerObject = req.headers;

    console.log(path);
    console.log(reqMethod);
    console.log(queryObject);
    console.log(headerObject);

    // read real data
    const decoder = new StringDecoder('utf-8');
    let realData = "";
    req.on("data", (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on("end", () => {
        realData += decoder.end();
        console.log(realData);
    });

    res.end("Hello Programmers");
};

// start the server
app.createServer();
