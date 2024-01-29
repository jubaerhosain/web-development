/**
 * Title: Server Request Response Handler
 * Description: Server Request Response Handler
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const url = require("url");
const { routes } = require("./route_handlers/routes");
const { StringDecoder } = require("string_decoder");

// Object -> Module Scaffolding
const server_handler = {};

// Hanle Request Response
server_handler.handleRequestResponse = (request, response) => {
    console.log(request.path);

    // request handling
    const parsedURL = url.parse(request.url, true);
    const requestPath = parsedURL.pathname;
    const trimmedPath = parsedURL.pathname.replace(/^\/+|\/+$/g, "");
    const requestMethod = request.method.toLowerCase();
    const queryObject = parsedURL.query;
    const headerObject = request.headers;

    // make a object of all request properties
    const requestProperties = {
        parsedURL,
        requestPath,
        trimmedPath,
        requestMethod,
        queryObject,
        headerObject,
    };

    console.log(queryObject);

    // rout handling
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : routes.not_found;

    // read real data send by client method body
    const decoder = new StringDecoder("utf-8");
    let realData = "";
    request.on("data", (buffer) => {
        realData += decoder.write(buffer);
    });
    request.on("end", () => {
        realData += decoder.end();

        try {
            requestProperties.body = JSON.parse(realData);
        } catch {
            console.log("Invlaid json from client");
            requestProperties.body = {};
        }

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === "number" ? statusCode : 500;
            payload = typeof payload === "object" ? payload : {};

            const payloadString = JSON.stringify(payload);
            response.setHeader("Content-Type", "application/json");
            response.writeHead(statusCode);
            response.write(payloadString);
            response.end();
        });

        try {
            console.log(JSON.parse(realData));
        } catch {
            console.log("not json");
        }
    });
};

module.exports = server_handler;
