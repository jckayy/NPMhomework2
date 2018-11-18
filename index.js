var express = require("express");
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  var fileName = "/public/index.html"
  res.sendFile(__dirname + fileName, null, function (err) {
    if (err)
      throw err;

  });
});

app.listen(PORT,function(){
  console.log('Server running...');
})
