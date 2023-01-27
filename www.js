const express = require("express")
const path = require("path")

const app = express()
const port = 3000

app.use(express.static("dist"))

app.use("/*", (req, res) => res.sendFile("dist/index.html"))

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})