/**
 * Title:
 * Description: token based authentication
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const database = require("../../lib/data.js");
const vrbody = require("../../lib/validate_request_body.js");
const { hash, parseJSON, generateToken } = require("../../lib/utilities.js");

// Object -> Module Scaffolding
const token_handler = {};

token_handler._methods = {};

// create new user token
token_handler._methods.post = (requestProperties, callBack) => {
    if (
        vrbody.validate_phone(requestProperties.body.phone) &&
        vrbody.validate_password(requestProperties.body.password)
    ) {
        database.read("users", requestProperties.body.phone, (error, userData) => {
            if (!error && userData) {
                let hashedPassword = parseJSON(userData).password;
                if (hashedPassword === hash(requestProperties.body.password)) {
                    let tokenObject = {};
                    tokenObject.tokenID = generateToken();
                    tokenObject.expires = Date.now() + 60 * 60 * 1000;

                    // create new token
                    database.create("tokens", requestProperties.body.phone, tokenObject, (error1) => {
                        if (!error1) {
                            callBack(200, {
                                message: "token created successfully",
                                tokenObject,
                            });
                        } else {
                            callBack(500, {
                                message: error1,
                            });
                        }
                    });
                } else {
                    callBack(400, {
                        message: "Invalid password",
                    });
                }
            } else {
                callBack(400, {
                    message: error,
                });
            }
        });
    } else {
        callBack(400, {
            message: "Invalid username or password",
        });
    }
};

// get infortmation
token_handler._methods.get = (requestProperties, callBack) => {
    if (
        // phone and token comes as query
        vrbody.validate_phone(requestProperties.queryObject.phone) &&
        vrbody.validate_tokenID(requestProperties.queryObject.token)
    ) {
        database.read("tokens", requestProperties.queryObject.phone, (error, tokenData) => {
            // file reader reads data as string
            tokenData = parseJSON(tokenData);
            if (!error && tokenData) {
                if (tokenData.tokenID === requestProperties.queryObject.token) {
                    callBack(200, {
                        message: tokenData,
                    });
                } else {
                    callBack(404, {
                        message: "Invalid token",
                    });
                }
            } else {
                callBack(404, {
                    message: error,
                });
            }
        });
    } else {
        callBack(404, {
            message: "Invalid query",
        });
    }
};

// update user token data (extend expires only)
token_handler._methods.put = (requestProperties, callBack) => {
    if (
        // phone, token and extend comes as query (extend is string type, value is "true")
        vrbody.validate_phone(requestProperties.queryObject.phone) &&
        vrbody.validate_tokenID(requestProperties.queryObject.token) &&
        vrbody.validate_extend(requestProperties.queryObject.extend)
    ) {
        database.read("tokens", requestProperties.queryObject.phone, (error, tokenData) => {
            tokenData = parseJSON(tokenData);
            if (!error && tokenData) {
                if (
                    tokenData.tokenID === requestProperties.queryObject.token &&
                    requestProperties.queryObject.extend === "true"
                ) {
                    if (tokenData.expires >= Date.now()) {
                        tokenData.expires = Date.now() + 60 * 60 * 1000;
                        // now update database
                        database.update("tokens", requestProperties.queryObject.phone, tokenData, (error1) => {
                            if (!error1) {
                                callBack(200, {
                                    message: "Token Successfully extended",
                                    tokenData,
                                });
                            } else {
                                callBack(404, {
                                    message: "Error updating token",
                                    error,
                                });
                            }
                        });
                    } else {
                        callBack(404, {
                            message: "Token Expires",
                        });
                    }
                } else {
                    callBack(404, {
                        message: "Invalid token",
                    });
                }
            } else {
                callBack(404, {
                    message: error,
                });
            }
        });
    } else {
        callBack(404, {
            message: "Invalid query",
        });
    }
};

// delete user token
token_handler._methods.delete = (requestProperties, callBack) => {
    if (
        // phone and token comes as query
        vrbody.validate_phone(requestProperties.queryObject.phone) &&
        vrbody.validate_tokenID(requestProperties.queryObject.token)
    ) {
        database.read("tokens", requestProperties.queryObject.phone, (error, tokenData) => {
            // file reader reads data as string
            tokenData = parseJSON(tokenData);
            if (!error && tokenData) {
                if (tokenData.tokenID === requestProperties.queryObject.token) {
                    database.delete("tokens", requestProperties.queryObject.phone, (error1) => {
                        if (!error1) {
                            callBack(404, {
                                message: "token deleted successfully",
                            });
                        } else {
                            callBack(404, {
                                message: "There is a problem in deleting",
                            });
                        }
                    });
                } else {
                    callBack(404, {
                        message: "Invalid token",
                    });
                }
            } else {
                callBack(404, {
                    message: error,
                });
            }
        });
    } else {
        callBack(404, {
            message: "Invalid query",
        });
    }
};

// callBack(false) means no error
token_handler._methods.verify = (phone, tokenID, callBack) => {
    if (
        vrbody.validate_phone(phone) &&
        vrbody.validate_tokenID(tokenID) 
    ) {
        database.read("tokens", phone, (error, tokenData) => {
            // file reader reads data as string
            tokenData = parseJSON(tokenData);
            if (!error && tokenData) {
                if (tokenData.tokenID === tokenID) {
                    // false means no error
                    callBack(false);
                } else {
                    callBack(error);
                }
            } else {
                callBack(error);
            }
        });
    } else {
        callBack("Invlaid phone or query");
    }
};

// user handler
token_handler.tokenHandler = (requestProperties, callBack) => {
    console.log("Token");

    // call the requested method if exists in _methods
    if (token_handler._methods[requestProperties.requestMethod]) {
        token_handler._methods[requestProperties.requestMethod](requestProperties, callBack);
    } else {
        callBack(405);
    }
};

module.exports = token_handler;
