require('dotenv').config({ path: "./config.env" })
const express = require('express')
const connectDB = require('./config/db')
const colors = require("colors")
const bodyparser = require("body-parser");

connectDB();

const app = express()

app.use(express.json())

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

app.use("/api", require("./routes/productRoute"));


const PORT = process.env.PORT || 5000

app.listen(PORT,
  console.log(
    `Server is on live in`.brightMagenta.bold + `\n@...@\n#...#\n%...%\n#...#\n&...&\n`.green + `{ ${process.env.NODE_ENV} }`.brightGreen.bold + ` mode on port `.black.bold.dim.italic +
    `{ ${PORT} }`.brightMagenta +
    `\n\n ------------- `.america + `CHNsBOT`.trap + ` -------------\n`.america)
)
