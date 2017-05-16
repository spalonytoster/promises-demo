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

async function main() {
  console.log(await executeAfterDelay(2000));
  console.log(await executeAfterDelay(4001));
}

main();
