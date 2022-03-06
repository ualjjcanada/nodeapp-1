const express = require('express')
const HelloWordService = require( "./services/hello-world" );

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:nameToSalute', (req, res) => {
    res.send(new HelloWordService().greet(req.params.nameToSalute));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})