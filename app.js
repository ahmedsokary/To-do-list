const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const appDate=require(__dirname +"/date.js");//call the module u made

var items = ["Buy Food", "Eat Food", "Cook Food"];
let workItem = []; //for the work page
app.use(express.static("public"));
app.set('view engine', 'ejs'); //ejs set
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {

let day=appDate.date();//put in that foramt to be able to call more than 1 func from exported module
  res.render('index', { //index is the name of the index.ejs inside views
    theDay: day, //theDay is the world in ejs file that will be replaced by day
    newItem: items //after second redirect by the post the new item will be posted in home page
  });
})
app.get('/work', function(req, res) {
  res.render('index', {
    theDay: "work list",
    newItem: workItem
  });
})

app.get('/about', function(req, res) {
  res.render('about');

})




app.post('/', function(req, res) {
  //another sol is to remove action="/" from the form it will work on each list alone
  if (req.body.button == "work") //from the button i gave it the value of the send item by get
  {
    let input = req.body.newInput;
    workItem.push(input);
    res.redirect('/work');
  } else {
    let input = req.body.newInput;
    items.push(input);
    res.redirect('/'); //as after pushing the new item in array go back home page to put interval  //as when we use redirect the get function will loaded again and the item will be added
  }
})



app.listen(3000, function() {
  console.log('set at port 3000');
})
