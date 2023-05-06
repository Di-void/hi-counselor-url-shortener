const express = require("express");
const { getUrl, shorten } = require("./shortener");

var cons = require("consolidate");

const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "views")); // Set the template folder to an empty string to use the root directory
app.set("view engine", "html"); // Set the view engine to handle HTWML files

app.get("/", async (req, res) => {
  res.render("home.html");
});

app.post("/shorten", async (req, res) => {
  const { url } = req.body;
  if (url) {
    let shortUrl = await shorten(url);
    return res.render("result.html", { shortUrl });
  }
  res.render("home.html");
});

app.get("/favicon.ico", (req, res) => {
  res.end();
});

app.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params;
  console.log("URL Param", shortUrl);
  if (!shortUrl) {
    return res.send("Your Params may be empty");
  }

  getUrl(shortUrl)
    .then((originalUrl) => {
      if (!originalUrl) {
        res.send("URL not found");
      }

      return res.redirect(originalUrl);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(5000, () => {
  console.log("Server is listening on PORT 5000");
});
