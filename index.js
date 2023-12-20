const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/static'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index")
})
app.get("/logos", (req, res) => {
  res.render("guessTheLogo")
})
app.get("/gibberish", (req, res) => {
  res.render("gibberish")
})

const router = require("./routes/serverCalls")
app.use(router)

app.listen(3000, (err) => {
  if (err) {
    console.error("Server Failed to Start");
  } else {
    console.log("Server started at port 3000");
  }
})