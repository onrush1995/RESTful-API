const http = require("http");
const server = http.createServer((request, response) => {
  console.log("request starting.....");
  //response
  response.write("hello world!");
  response.end();
});
server.listen(5000);
console.log("server running at http://127.0.0.1:5000");
