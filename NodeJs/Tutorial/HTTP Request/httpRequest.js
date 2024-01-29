const http = require('node:http');
const options = {
	host: 'www.google.com',
};

const requestDetails = {
	protocol: "http:",
	hostname: "www.google.com",
	method: "POST",
	path: "/",
	timeout: 5000,
};

const req = http.get(requestDetails, (res) => {
	const ip = req.socket.localAddress;
	const port = req.socket.localPort;
	console.log(`Your IP address is ${ip} and your source port is ${port}.`);
	// Consume response object
	console.log(res);
});

req.on("timeout", (error) => {
	console.log("error: timeout", error);
});

req.end();


// req.once('response', (res) => {
//   const ip = req.socket.localAddress;
//   const port = req.socket.localPort;
//   console.log(`Your IP address is ${ip} and your source port is ${port}.`);
//   // Consume response object
// });