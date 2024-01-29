const express = require("express");
const app = express();
const cluster = require("cluster");
const os = require("os");

const noOfCPU = os.cpus().length;

app.get("/", (req, res) => {
    console.log("GET");
    // for (let i = 0; i < 1e1; i++) {
    //      console
    // }
    res.send(`Worker ${process.pid} sends Hello World`);

    // kill the worker
    // ................[[[[this gives error while loadtesting]]]]
    // overhead of killing the worker
    // see multiple_instance1.js
    cluster.worker.kill();
});

// all workers share the same port number
if (cluster.isMaster) {
    for (let i = 0; i < noOfCPU; i++) {
        cluster.fork();
    }

    // listen even
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited with code ${code}`);
        // create a new worker after killing current worker such that
        // our total alive workers remains same
        cluster.fork();
    });
} else {
    app.listen(3000, () => {
        console.log(`Worker ${process.pid} is listening on port 3000`);
    });
}
