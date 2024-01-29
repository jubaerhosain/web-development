const fs = require('fs');

// const readStream = fs.createReadStream(`${__dirname}/lorem.txt`);
const readStream = fs.createReadStream(`${__dirname}/input.txt`, 'utf-8');

const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);

// readStream.on("data", (buffer) => {
//     writeStream.write(buffer);
// });


readStream.pipe(writeStream);