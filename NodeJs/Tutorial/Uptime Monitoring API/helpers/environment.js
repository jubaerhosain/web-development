/**
 * Title: Environment
 * Description: Handle environment related things
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies

// Object -> Module Scaffolding
const environment = {};

environment.staging = {
    port: 3000,
    env_name: "staging",
    secrete_key: "staging key",
    tokenLength: 20,
    phoneLength: 11,
};

environment.production = {
    port: 5000,
    env_name: "production",
    secrete_key: "productin key",
    tokenLength: 20,
    phoneLength: 11,
};

// this will be changed later
// process.env.NODE_ENV = "production";

const current_env = typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// environment to be exported
const export_env = typeof environment[current_env] === "object" ? environment[current_env] : environment.staging;

module.exports = export_env;
