// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACeb1fc39fcba5419691b9f1a79e489b19";
const authToken = "2e2f8fca891e86661e46651433164844"
const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
        from: "whatsapp:015",
        to: "whatsapp:+15017122661",
    })
    .then((message) => console.log(message.sid));
