const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = { user: "admin", pass: "password" };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("GET sent");
});
app.post("/login", function(req, res) {
  if (data.user == req.body.user && data.pass == req.body.pass) {
    res.write('{"status":"success"}');
  } else {
    res.write('{"status":"fail"}');
  }
  console.log(req.body.user);
  res.send();
});
app.put("/", function(req, res) {
  res.send("PUT sent");
});
app.delete("/", function(req, res) {
  res.send("DELETE sent");
});

app.listen(3000);
