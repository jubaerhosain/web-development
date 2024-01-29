/**
 * Title:
 * Description: hash the password,
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const current_env = require("../helpers/environment.js");

// Object -> Module Scaffolding
const utilities = {};

utilities.hash = (password) => {
    if (typeof password === "string" && password.length > 0) {
        const hash = require("crypto").createHmac("sha256", current_env.secrete_key).update(password).digest("hex");
        return hash;
    }
    return false;
};

utilities.parseJSON = (string) => {
    let parsedJSON = {};
    try {
        parsedJSON = JSON.parse(string);
    } catch {
        parsedJSON = { message: "invalid json format in the file" };
    }
    return parsedJSON;
};

// generate a token of 20 character length
utilities.generateToken = () => {
    let possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 1; i <= current_env.tokenLength; i++) {
        token += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    return token;
};

module.exports = utilities;
