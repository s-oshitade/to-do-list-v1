const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

let items = ["Code everyday", "Exercise before shower", "Give thanks"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("public"));

app.get('/', (req, res) => {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  const day = today.toLocaleDateString("en-US", options);


  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post('/', (req, res) => {
  let item = req.body.newItem;
  if(req.body.list === "Work List"){
      workItems.push(item);
      res.redirect("/work")
  } else {
   items.push(item);
   res.redirect("/");   
  }
})

app.get("/work", (req, res) => {
  res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.get("/about", (req, res) => {
  res.render("about");
})

app.listen(port, () => {
  console.log("Server is running on port 3000!");
})