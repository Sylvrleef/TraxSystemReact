const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const models = require("./models");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.post("/api/items", function(req, res) {
  console.log(req.body);
  models.items
    .create(req.body)
    .then(() => console.log("success"))
    .catch(err => console.log(err));
});
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
models.sequelize.sync().then(() => {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
