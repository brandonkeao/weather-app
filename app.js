const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var address = encodeURIComponent(argv['address']);

  console.log(address);

request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=GWGfbCANMxzsupJWT3JUcYa6KbXsPuuo&location==${address}`,
  json: true
}, (error, response, body) => {
  if(error) {
    console.log(`Unable to connect to Google servers.`);
  }
  try
  {
      console.log(`Location: ${JSON.stringify(body.results[0].locations[0])}`);
      console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
      console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
  } catch (error) { //else if (body.status === 'OK') {
    console.log(`Unable to find that address. \n\nError: ${error}`);
  }
});
