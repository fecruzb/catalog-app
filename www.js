const express = require("express")
const path = require("path")

const app = express()
const port = 8080

app.use(express.static("dist"))

app.use("/*", (req, res) => res.sendFile(path.resolve("dist/index.html")))

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
