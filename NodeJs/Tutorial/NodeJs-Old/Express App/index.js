// this is actually custom backend project without express js
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const services = fs.readFileSync('services.html');
const contact = fs.readFileSync('contact.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let url = req.url;

    if(url == '/index.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(home);
    }
    else if(url == '/about.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(about);
    }
    else if(url == '/services.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(services);
    }
    else if(url == '/contact.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(contact);
    } 
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Page Not Found.<h1>');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});