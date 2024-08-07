const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`* Server is running on  http://localhost:${port}`);
});
