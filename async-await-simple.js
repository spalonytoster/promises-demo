// jshint esversion: 6

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  let x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

async function f2() {
  let y = await 20;
  console.log(y); // 20
}
f2();

async function f3() {
  try {
    let z = await Promise.reject(30);
  }
  catch (e) {
    console.log(e); // 30
  }
}
f3();
