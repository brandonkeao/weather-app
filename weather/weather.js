const request = require('request');

var getTemperature = (latitude, longitude) => {
  request({
    url: `https://api.darksky.net/forecast/875384e40f0a71affc0df7999312f60b/${latitude},${longitude}`,
    json: true
  }, (error, reponse, body) => {
    if(!error && reponse.statusCode === 200) {
      try {
        console.log(body.currently.temperature);
      } catch (error) {
        console.log(`Unable to get the forecast. \n\nError: ${error}`);
      }
    } else {
      console.log('Unable to fetch weather.');
    }
  });
}

module.exports = {
  getTemperature
}
