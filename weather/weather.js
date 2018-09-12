const request = require('request');

var getTemperature = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/875384e40f0a71affc0df7999312f60b/${latitude},${longitude}`,
    json: true
  }, (error, reponse, body) => {
    if(!error && reponse.statusCode === 200) {
      try {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparent_temperature: body.currently.apparentTemperature
        });
      } catch (error) {
        callback(`Unable to get the forecast. \n\nError: ${error}`);
      }
    } else {
      callback('Unable to fetch weather.');
    }
  });
}

module.exports = {
  getTemperature
}
