const express = require('express')
const data = require('./db.json')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/products', (req, res) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(data))
})

app.listen(3001, () => {
  console.log('API running on port 3001.')
})
