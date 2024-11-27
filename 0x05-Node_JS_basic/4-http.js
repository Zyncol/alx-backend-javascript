const http = require('http');

const PORTT = 1245;
const HOSTT = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORTT, HOSTT, () => {
  process.stdout.write(`Server listening at -> http://${HOSTT}:${PORTT}\n`);
});

module.exports = app;
