const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("hello i am working ");
});
app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("server is running");
});
