const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer(function (req, res) {
  let filePath;

  switch (req.url) {
    case "/":
      filePath = "index.html";
      break;
    case "/about":
      filePath = "about.html";
      break;
    case "/contact-me":
      filePath = "contact-me.html";
      break;
    default:
      filePath = "404.html";
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write("File not found!");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
