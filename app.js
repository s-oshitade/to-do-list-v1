const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.get('/', (req, res){
  res.send("Hello!");
})

app.listen(port, ()=> {
  console.log("Server is running on port 3000!");
})

