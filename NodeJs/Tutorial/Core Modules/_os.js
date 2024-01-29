const os = require('os');

console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem()/1e9);

console.log(os.cpus());