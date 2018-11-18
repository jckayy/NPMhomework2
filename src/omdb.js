var axios = require("axios");
module.exports = {
  getMovieByTitle:function(title){
  axios.get(`http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
}
