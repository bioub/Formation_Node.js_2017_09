const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write('Hello');
      break;
    case '/api/hello':
      res.setHeader('Content-type', 'application/json'); // MIME Type
      res.write(JSON.stringify({msg: 'Hello'}));
      break;
    case '/redirect-google':
      res.statusCode = 302;
      res.setHeader('Location', 'http://www.google.fr/');
      break;
    case '/hello.html':
      res.send(`
      <!Doctype html>
<body>

</body>`);
      break;
    default:
      res.statusCode = 404;
      res.write('404 Not Found');
  }

  res.end();
});

server.listen(8080, () => {
  console.log('listening');
});
