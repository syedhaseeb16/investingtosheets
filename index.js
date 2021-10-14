const express = require('express')
const { start } = require("./index-1");

const app = express()
const port = 3000

app.get('/', (req, res) => {

    start();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})