/**
 * Title: U
 * Description: 
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const http = require("http");
const server_handler = require("../handlers/request_response_handler.js");
const environment = require("../helpers/environment.js");

// Object -> Module Scaffolding
const server = {};

// Configaration Object[not using]
// server.config = {
//     port: 3000,
// };


// Create Server
server.init = () => {
    console.log(environment.env_name);

    const httpServer = http.createServer(server_handler.handleRequestResponse);
    
    httpServer.listen(environment.port, () => {
        console.log(`Listening to port number: ${environment.port}`);
    });

    console.log("Server started.......");
};

// server.createServer();

module.exports = server;
