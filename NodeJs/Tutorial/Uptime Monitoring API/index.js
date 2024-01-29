'use strict';


/**
 * Title: Uptime Monitoring API using raw nodejs code
 * Description: "A REST API to monitor up or down time of user defined links"
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const server = require("./lib/server.js");
const worker = require("./lib/worker.js");

// Object -> Module Scaffolding
const app = {};

app.init = () => {
    // start server
    server.init();

    // start workers
    worker.init();
}

app.init();

