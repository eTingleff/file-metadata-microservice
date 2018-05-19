// server.js
// where your node app starts

// init project
var express = require('express')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express()

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
})

var upload = multer().single('file')

app.post("/upload", function(req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    }
    let file = req.file;
    let size = file.size;
    res.json({"size": size});
  })
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
