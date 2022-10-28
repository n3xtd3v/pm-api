const express = require('express')
const cors = require('cors')
const mssql = require('mssql')
const mssqlConfig = require('./mssqlConfig.js')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', require('./routes/airRouter'))
;(async () => {
  try {
    await mssql.connect(mssqlConfig)
    console.log('Connected to mssql.')
  } catch (err) {
    console.log(err.message)
  }
})()

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})
