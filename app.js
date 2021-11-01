const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else {
    let parsedURL = url.parse(req.url);
    res.write(`Welcome ${parsedURL.pathname}`);
    res.end();
  }
});

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
