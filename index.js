const express = require('express')
const app = express()

var message = "";

app.get('/', (req, res) => {
  res.send('msg: ' + message);
})

app.listen(3000, () => console.log('Server running on port 3000'))
