/**
 * Title:
 * Description:
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const database = require("../../lib/data.js");
const vrbody = require("../../lib/validate_request_body.js");
const { hash, parseJSON } = require("../../lib/utilities.js");
const token_handler = require("./token_handler.js");

// Object -> Module Scaffolding
const check_handler = {};

check_handler._methods = {};

// create new user check
check_handler._methods.post = (requestProperties, callBack) => {
    const body = requestProperties.body;
    if (vrbody.validate_check_body(body.protocol, body.url, body.method, body.successCode, body.timeout)) {
        token_handler._methods.verify(
            requestProperties.queryObject.phone,
            requestProperties.headerObject.token,
            (error) => {
                if (!error) {
                    // create check
                    database.create("checks", requestProperties.queryObject.phone, body, (error1) => {
                        if (!error1) {
                            callBack(200, {
                                message: "Check Created Successfully",
                            });
                        } else {
                            callBack(404, {
                                message: error1,
                            });
                        }
                    });
                } else {
                    callBack(404, {
                        message: error,
                    });
                }
            }
        );
    } else {
        callBack(400, {
            message: "problem in post body",
        });
    }
};

// get infortmation
check_handler._methods.get = (requestProperties, callBack) => {
    if (vrbody.validate_phone(requestProperties.queryObject.phone)) {
        // verify token
        if (vrbody.validate_tokenID(requestProperties.headerObject.token)) {
            token_handler._methods.verify(
                requestProperties.queryObject.phone,
                requestProperties.headerObject.token,
                (error) => {
                    if (!error) {
                    } else {
                        callBack(404, {
                            message: "Invalid token",
                        });
                    }
                }
            );
        } else {
            callBack(404, {
                message: "Invalid token",
            });
        }
    } else {
        callBack(404, {
            message: "Invalid query phone",
        });
    }
};

// update user data
check_handler._methods.put = (requestProperties, callBack) => {
    const body = requestProperties.body;
    body.phone = requestProperties.queryObject.phone;
    if (vrbody.validate_put_body(body) && vrbody.validate_phone(body.phone)) {
        // verify token
        if (vrbody.validate_tokenID(requestProperties.headerObject.token)) {
            token_handler._methods.verify(
                requestProperties.queryObject.phone,
                requestProperties.headerObject.token,
                (error0) => {
                    if (!error0) {
                    } else {
                        callBack(404, {
                            message: "Invalid token",
                        });
                    }
                }
            );
        } else {
            callBack(404, {
                message: "Invalid token",
            });
        }
    } else {
        callBack(404, {
            message: "Nothing to update",
        });
    }
};

// delete user
check_handler._methods.delete = (requestProperties, callBack) => {
    if (vrbody.validate_phone(requestProperties.queryObject.phone)) {
        // verify token
        if (vrbody.validate_tokenID(requestProperties.headerObject.token)) {
            token_handler._methods.verify(
                requestProperties.queryObject.phone,
                requestProperties.headerObject.token,
                (error) => {
                    if (!error) {
                    } else {
                        callBack(404, {
                            message: "Invalid token",
                        });
                    }
                }
            );
        } else {
            callBack(404, {
                message: "Invalid token",
            });
        }
    } else {
        callBack(405, {
            message: "invalid query",
        });
    }
};

// user handler
check_handler.checkHandler = (requestProperties, callBack) => {
    console.log("User");

    // call the requested method if exists in _methods
    if (check_handler._methods[requestProperties.requestMethod]) {
        check_handler._methods[requestProperties.requestMethod](requestProperties, callBack);
    } else {
        callBack(405);
    }
};

module.exports = check_handler;
