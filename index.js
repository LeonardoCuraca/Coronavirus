var http = require('http');
fs = require('fs');

http.createServer(function(req, res) {
  var url = req.url;
  if (url === '/') {
    fs.readFile('./index.html', function(error, html) {
      res.write(html);
      res.end();
    })
  }
  if (url === '/protection') {
    fs.readFile('./protection.html', function(error, html) {
      res.write(html);
      res.end();
    })
  }
  if (url === '/questions') {
    fs.readFile('./questions.html', function(error, html) {
      res.write(html);
      res.end();
    })
  }
  if (url === '/myth') {
    fs.readFile('./myth.html', function(error, html) {
      res.write(html);
      res.end();
    })
  }
  if (url === '/login') {
    fs.readFile('./login.html', function(error, html) {
      res.write(html);
      res.end();
    })
  }
}).listen(process.env.PORT || 3000);
