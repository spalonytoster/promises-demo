/**
 * Succeeds if the ms parameter is even;
 * Fails if the ms parameter is odd;
 */

function executeAfterDelay(ms) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms % 2 === 0) {
        resolve('Success!');
      }
      else {
        reject('Fail!');
      }
    }, ms);
  });
  return promise;
}

executeAfterDelay(2000).then((data) => {
  console.log('Success: ', data);
}, (err) => {
  console.log('Fail: ', err);
});

executeAfterDelay(4001).then((data) => {
  console.log('Success: ', data);
}, (err) => {
  console.log('Fail: ', err);
});
