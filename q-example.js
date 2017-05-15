// jshint esversion: 6
const Q = require('q');

/**
 * Succeeds if the ms parameter is even;
 * Fails if the ms parameter is odd;
 */
function executeAfterDelay(ms) {
  let deferred = Q.defer();
  setTimeout(() => {
    if (ms % 2 === 0) {
      deferred.resolve('Success!');
    }
    else {
      deferred.reject('Fail!');
    }
  }, ms);
  return deferred.promise;
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
