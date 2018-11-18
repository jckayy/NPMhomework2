var weather = require("weather-js");

// weather.find({ search: "Atlanta, GA", degreeType: "F" }, function(err, result) {

//   if (err) {
//     console.log(err);
//   }
//  console.log(JSON.stringify(result, null, 2));

// });

module.exports ={
  
  getweather:function(){
    weather.find({ search: "Atlanta, GA", degreeType: "F" }, function(err, result) {

      if (err) {
        console.log(err);
      }
     //console.log(JSON.stringify(result, null, 2));
      console.log(result);
    });
  }

}