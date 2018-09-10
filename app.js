const request = require('request');

request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=GWGfbCANMxzsupJWT3JUcYa6KbXsPuuo&location==%203927%20wolff%20st.%20denver%20co`,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
  console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});
