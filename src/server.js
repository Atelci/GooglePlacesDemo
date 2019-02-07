var express = require('express');

//app setup
var app = express();

var port = process.env.PORT || 8070;

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

//no-cors
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

//GET
app.get('/process_get', function (req, res) {
   params = {
      lon: req.query.lon,
      lat: req.query.lat,
      rad: req.query.rad
   };
   //loc = JSON.parse(params);
   loc = JSON.stringify(params);

   res.send({'resp': loc});

   res.end() 

})
