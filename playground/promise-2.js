var request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let formatted_address = encodeURIComponent(address);
    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=GWGfbCANMxzsupJWT3JUcYa6KbXsPuuo&location==${formatted_address}`,
      json: true
    }, (error, response, body) => {
      if(error) {
        reject(`Unable to connect to Google servers.`);
      }
      try
      {
          resolve({
            address: constructFormattedAddress(body.results[0].locations[0]),
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng
          });
      } catch (error) {
        reject(`Unable to find that address. Error: \n\n${error}`);
      }
    });
  });
};

geocodeAddress('    ').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});

var constructFormattedAddress = (location) => {
  let address_field_array = []
  address_field_array[0] = location.street;
  address_field_array[1] = location.adminArea5;
  address_field_array[2]  = location.adminArea3;
  address_field_array[3]  = location.adminArea1;

  var formatted_address = '';

  address_field_array.filter((address_field) => {
    return address_field !== '';
  }).forEach((reduced_field) => {
    formatted_address += `${reduced_field}, `;
  });

  return formatted_address.slice(0, -2);
}
