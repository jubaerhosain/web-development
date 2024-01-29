/**
 * Title:
 * Description:
 * Author:
 * Date:
 */

// Dependencies
const database = require("./data.js");
const { parseJSON } = require("./utilities.js");
const url = require("url");
const http = require("http");
const https = require("https");

// Object -> Module Scaffolding
const worker = {};

worker.processChekOutcome = (checkData, checkOutcome) => {
    const state =
        !checkOutcome.error && !checkOutcome.timeout && checkData.successCode.indexOf(checkOutcome.statusCode) > -1
            ? "up"
            : "down";

    console.log(state, checkOutcome.statusCode);

    // do Alert if state changes
    const doAlert = checkData.lastChecked && checkData.state !== state;
    checkData.state = state;
    checkData.lastChecked = Date.now();

    // checkData should contain phone number as filename
    database.update("checks", "01717407400", checkData, (error) => {
        if(!error) {
            if(doAlert) {
                console.log("State changes");
            } else {
                console.log("No alart needed as no state changes");
            }
        } else {
            console.log("Error updating checkdata");
        }
    });

    if(doAlert) {

    } else {

    }
};

worker.performCheck = (checkData) => {
    // parse the url
    const parsedURL = url.parse(checkData.protocol + "://" + checkData.url, true);
    const hostname = parsedURL.hostname;
    const path = parsedURL.path; // path includes query string where pathname not

    console.log(hostname);
    console.log(checkData);
    console.log("path: ", path);

    const requestDetails = {
        protocol: checkData.protocol + ":",
        hostname: hostname,
        method: checkData.method.toUpperCase(),
        path: path,
        timeout: checkData.timeout*1000,
    };

    console.log(requestDetails);

    const protocolToUse = checkData.protocol === "http" ? http : https;

    const checkOutcome = {
        error: false,
        timeout: false,
        statusCode: 0,
    };

    let checkOutcomeFlag = false;

    // create request
    const request = protocolToUse.request(requestDetails, (response) => {
        checkOutcome.statusCode = response.statusCode;
        if (!checkOutcomeFlag) {
            checkOutcomeFlag = true;
            console.log(checkOutcome.statusCode);
            worker.processChekOutcome(checkData, checkOutcome);
        }
    });

    request.on("error", (error) => {
        checkOutcome.error = true;
        if (!checkOutcomeFlag) {
            checkOutcomeFlag = true;
            worker.processChekOutcome(checkData, checkOutcome);
        }
    });

    request.on("timeout", (error) => {
        console.log("error: timeout", error);
        checkOutcome.timeout = true;
        if (!checkOutcomeFlag) {
            checkOutcomeFlag = true;
            worker.processChekOutcome(checkData, checkOutcome);
        }
    });

    // send request
    request.end();
};

worker.validateCheckData = (checkData) => {
    // add two properties in this object
    checkData.state =
        typeof checkData.state === "string" && ["up", "down"].indexOf(checkData.state) > -1 ? checkData.state : "down";
    checkData.lastChecked =
        typeof checkData.lastChecked === "number" && checkData.lastChecked > 0 ? checkData.lastChecked : false;
    // go to next step
    worker.performCheck(checkData);
};

worker.gatherAllCheck = () => {
    database.getFileNames("checks", (error, fileNames) => {
        if (!error && fileNames && fileNames.length > 0) {
            fileNames.forEach((fileName) => {
                database.read("checks", fileName, (error1, checkData) => {
                    if (!error1 && checkData) {
                        worker.validateCheckData(parseJSON(checkData));
                    } else {
                        console.log("Error reading file" + fileName);
                    }
                });
            });
        } else {
            console.log("Could't find any checks to process.");
        }
    });
};

worker.init = () => {
    console.log("Worker started.......");

    setInterval(() => {
        worker.gatherAllCheck();
    }, 1000 * 5);
};

module.exports = worker;
