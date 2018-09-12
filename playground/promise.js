var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('ERROR: a and b need to be numbers');
      }
    }, 3000)
  });
}

// asyncAdd('3', 98).then((result) => {
//   console.log(`a + b = ${result}`);
//   return asyncAdd(result, 49);
// }, (error) => {
//   console.log(error);
// }).then((result) => {
//   console.log(`Should be 150: ${result}`);
// }, (error) => {
//   console.log(error);
// });

asyncAdd(3, 98).then((result) => {
  console.log(`a + b = ${result}`);
  return asyncAdd(result, 49);
}).then((result) => {
  console.log(`Should be 150: ${result}`);
}).catch((error) => {
  console.log(error);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(`Promise rejected.`);
//     resolve(`Promise resolved.`);
//   }, 2500)
// });
//
//
// somePromise.then((message) => {
//   console.log(`Things went as expected: ${message}`);
// }, (error) => {
//   console.log(`Things went HORRIBLY WRONG: ${error}`);
// });
