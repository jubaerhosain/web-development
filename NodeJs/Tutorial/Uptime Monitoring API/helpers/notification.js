/**
 * Title:
 * Description:
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const https = require("https");
process.env.TWILIO_ACCOUNT_SID = "ACeb1fc39fcba5419691b9f1a79e489b19";
process.env.TWILIO_AUTH_TOKEN = "2e2f8fca891e86661e46651433164844";

// Object -> Module Scaffolding
const notification = {};

notification.sendTwilioSMS = (phone, message, callBack) => {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Find your Account SID and Auth Token at twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    client.messages
        .create({
            body: "This is the ship that made the Kessel Run in fourteen parsecs?",
            from: "+18318300672", // my twilio number
            to: "+8801717407400", // not works in other number {Twilio account created by this number}
        })
        .then((message) => {
            console.log("message");
            console.log(message.sid);
            // no error
            callBack(false);
        })
        .catch((error) => {
            console.log("error");
            console.log(error);
            callBack(error);
        });
};

notification.sendTwilioSMS();

module.exports = notification;
