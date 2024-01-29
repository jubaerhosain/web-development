/**
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies

// Object -> Module Scaffolding
const sample_handler = {};

// route object
sample_handler.sampleHandler = (requestProperties, callBack) => {
    console.log("Sample");

    callBack(200, {
        message: "This is a sample url",
    });
};

module.exports = sample_handler;
