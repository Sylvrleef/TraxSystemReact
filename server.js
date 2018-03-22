const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const routes = require("./routes");
const app = express();
const models = require("./models");
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));

//Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.post("/api/detail", function(req,res) {
  console.log(req.body);
  models.Detail.create(req.body)
  .then(() => console.log("success"))
  .catch(err => console.log(err))
})
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Add routes
app.use(routes);


// Sync sequelize models
const db = require("./models");
db.sequelize.sync().then(function() {
	app.listen(PORT,function() {
		console.log("App now listening at localhost:" + PORT);
	});
});
