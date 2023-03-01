const express = require('express')
const app = express()
const port = 3000

const methodes = require('./methodes')

app.get('/test', methodes.test)

app.post('/import-csv', methodes.importInDatabase);

app.listen(port, () => {
  console.log(`Server listen on ${port}`)
})