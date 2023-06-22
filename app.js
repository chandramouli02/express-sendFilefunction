const express = require("express");

let app = express();
//get api read..
app.get("/gadgets", (req, res) => {
  res.sendFile("./gadgets.html", { root: __dirname });
});

//app.listen(3001);

module.exports = app;
