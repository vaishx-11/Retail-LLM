const connectToMongo = require('./Db');
var cors = require('cors')
const express = require('express')
// const mongoose = require('mongoose')
connectToMongo();
const app = express()
const port = 4000
// const path = require('path');
// ->
const path = require('path');
app.use(express.json());
// ->
app.use(cors())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })






app.use(express.json())
app.use('/api/auth', require('./router/auth'))
app.use('/api/Aauth', require('./router/Aauth'))
app.use('/api',require('./router/notes'))

// ->
// Serve static files from the uploads directory
app.use('/api/image', express.static(path.join(__dirname, 'uploads')));
// ->
app.get("/", (req, res) => {
  res.send("BOOm in home")
})
// -----------------------

// ----------------
app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

})
