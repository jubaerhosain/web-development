/**
 * Title:
 * Description:
 * Author: ABC
 * Date: 28/9/22
 */

// post body sample
// {
//     "firstName": "Md. Jubaer",
//     "lastName": "Hosain",
//     "phone": "01717407400",
//     "password": "13455",
//     "tosAgreement": true
// }

// Dependencies
const current_env = require("../helpers/environment.js");

// Object -> Module Scaffolding
const validate_request_body = {};

validate_request_body.validate_tokenID = (tokenID) => {
    return typeof tokenID === "string" && tokenID.trim().length === current_env.tokenLength ? true : false;
};

validate_request_body.validate_extend = (extend) => {
    return typeof extend === "string" && extend === "true" ? true : false;
};

validate_request_body.validate_firstName = (firstName) => {
    return typeof firstName === "string" && firstName.trim().length > 0 ? true : false;
};

validate_request_body.validate_lastName = (lastName) => {
    return typeof lastName === "string" && lastName.trim().length > 0 ? true : false;
};

validate_request_body.validate_phone = (phone) => {
    return typeof phone === "string" && phone.trim().length === current_env.phoneLength ? true : false;
};

validate_request_body.validate_password = (password) => {
    return typeof password === "string" && password.trim().length > 0 ? true : false;
};

validate_request_body.validate_tosAgreement = (tosAgreement) => {
    return typeof tosAgreement === "boolean" ? true : false;
};

// all field should be valid
validate_request_body.validate_post_body = (post_body) => {
    return (
        validate_request_body.validate_firstName(post_body.firstName) &&
        validate_request_body.validate_lastName(post_body.lastName) &&
        validate_request_body.validate_phone(post_body.phone) &&
        validate_request_body.validate_password(post_body.password) &&
        validate_request_body.validate_tosAgreement(post_body.tosAgreement)
    );
};

// atleast one field should be valid
validate_request_body.validate_put_body = (post_body) => {
    return (
        validate_request_body.validate_firstName(post_body.firstName) ||
        validate_request_body.validate_lastName(post_body.lastName) ||
        validate_request_body.validate_phone(post_body.phone) ||
        validate_request_body.validate_password(post_body.password) ||
        validate_request_body.validate_tosAgreement(post_body.tosAgreement)
    );
};

// all field should be valid
validate_request_body.validate_check_body = (protocol, url, method, successCode, timeout) => {
    console.log(protocol, url, method, successCode, timeout);
    return (
        typeof protocol === "string" &&
        ["http", "https"].indexOf(protocol) > -1 &&
        typeof url === "string" &&
        url.length > 0 &&
        typeof method === "string" &&
        ["get", "post", "put", "delete"].indexOf(method) > -1 &&
        typeof successCode === "object" &&
        successCode instanceof Array &&
        typeof timeout === "number" &&
        timeout % 1 === 0 &&
        timeout >= 1 &&
        timeout <= 5
    );
};

module.exports = validate_request_body;
