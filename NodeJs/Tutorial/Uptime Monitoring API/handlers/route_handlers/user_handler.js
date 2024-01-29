/**
 * Title: User Handler
 * Description: User Handler
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const database = require("../../lib/data.js");
const vrbody = require("../../lib/validate_request_body.js");
const { hash, parseJSON } = require("../../lib/utilities.js");
const token_handler = require("./token_handler.js");

// Object -> Module Scaffolding
const user_handler = {};

user_handler._methods = {};

// create new user
user_handler._methods.post = (requestProperties, callBack) => {
    if (vrbody.validate_post_body(requestProperties.body)) {
        const body = JSON.parse(JSON.stringify(requestProperties.body));
        // store the hash of password
        body.password = hash(body.password);

        // phone number as unique filename
        database.create("users", requestProperties.body.phone, body, (error) => {
            if (!error) {
                callBack(200, {
                    message: "user created successfully",
                });
            } else {
                callBack(405, {
                    message: error,
                });
            }
        });
    } else {
        callBack(400, {
            message: "problem in post body",
        });
    }
};

// get infortmation
user_handler._methods.get = (requestProperties, callBack) => {
    if (vrbody.validate_phone(requestProperties.queryObject.phone)) {
        // verify token
        if (vrbody.validate_tokenID(requestProperties.headerObject.token)) {
            token_handler._methods.verify(
                requestProperties.queryObject.phone,
                requestProperties.headerObject.token,
                (error) => {
                    if (!error) {
                        database.read("users", requestProperties.queryObject.phone, (error1, user) => {
                            // file reader reads data as string
                            user = parseJSON(user);
                            if (!error1 && user) {
                                delete user.password;
                                callBack(200, {
                                    message: user,
                                });
                            } else {
                                callBack(404, {
                                    message: error1,
                                });
                            }
                        });
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
user_handler._methods.put = (requestProperties, callBack) => {
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
                        // update data
                        database.read("users", body.phone, (error1, userData) => {
                            userData = parseJSON(userData);
                            if (!error1 && userData) {
                                if (vrbody.validate_firstName(body.firstName)) {
                                    userData.firstName = body.firstName;
                                }
                                if (vrbody.validate_lastName(body.lastName)) {
                                    userData.lastName = body.lastName;
                                }
                                if (vrbody.validate_password(body.password)) {
                                    // store the hash value of password
                                    userData.password = hash(body.password);
                                }
                                database.update("users", body.phone, userData, (error2) => {
                                    if (!error2) {
                                        callBack(200, {
                                            message: "Updated Successfully",
                                        });
                                    } else {
                                        callBack(404, {
                                            message: error2,
                                        });
                                    }
                                });
                            } else {
                                callBack(404, {
                                    message: error1,
                                });
                            }
                        });
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
user_handler._methods.delete = (requestProperties, callBack) => {
    if (vrbody.validate_phone(requestProperties.queryObject.phone)) {
        // verify token
        if (vrbody.validate_tokenID(requestProperties.headerObject.token)) {
            token_handler._methods.verify(
                requestProperties.queryObject.phone,
                requestProperties.headerObject.token,
                (error) => {
                    if (!error) {
                        database.delete("users", requestProperties.queryObject.phone, (error1) => {
                            if (!error1) {
                                callBack(200, {
                                    message: "Deleted successfully",
                                });
                            } else {
                                callBack(405, {
                                    message: error1,
                                });
                            }
                        });
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
user_handler.userHandler = (requestProperties, callBack) => {
    console.log("User");

    // call the requested method if exists in _methods
    if (user_handler._methods[requestProperties.requestMethod]) {
        user_handler._methods[requestProperties.requestMethod](requestProperties, callBack);
    } else {
        callBack(405);
    }
};

module.exports = user_handler;
