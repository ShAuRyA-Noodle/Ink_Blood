const express = require("express");
const app = express(); 

const postRoutes = require("./routes/posts");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", postRoutes); // expects a router

app.listen(3000, () => {
  console.log("🦑 Squid Blog running on port 3000");
});
