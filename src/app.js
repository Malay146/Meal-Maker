
const express = require("express");
const app = express();
require("./db/db");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public/stylesheets")));
app.use(express.static(path.join(__dirname, "../public/javascripts")));
app.use(express.static(path.join(__dirname, "../public/images")));
app.use(express.static(path.join(__dirname, "../public/Gif")));
app.use(express.static(path.join(__dirname, "../public/Videos")));

module.exports = { app };

// const express = require("express");
// const app = express();
// require("./db/db");
// const path = require("path");

// // Routers
// const AuthRouter = require("./routes/AuthRouter"); // <<< add this line

// app.use(express.json()); // <<< necessary for parsing JSON bodies
// app.use(express.urlencoded({ extended: true })); // <<< necessary for parsing form data

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));

// // Static files
// app.use(express.static(path.join(__dirname, "../public")));
// app.use(express.static(path.join(__dirname, "../public/stylesheets")));
// app.use(express.static(path.join(__dirname, "../public/javascripts")));
// app.use(express.static(path.join(__dirname, "../public/images")));
// app.use(express.static(path.join(__dirname, "../public/Gif")));
// app.use(express.static(path.join(__dirname, "../public/Videos")));

// // Mount your Auth Router
// app.use("/auth", AuthRouter); // <<< important

// module.exports = { app };
