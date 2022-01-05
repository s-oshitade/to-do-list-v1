const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {

  const today = new Date();
  
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  
  const day = today.toLocaleDateString("en-US", options);


  res.render("list", {
    kindOfDay: day
  });

});

app.post('/', (req, res)=> {
  let list = req.body.newItem;
  console.log(list);
})

app.listen(port, () => {
  console.log("Server is running on port 3000!");
})