//sob gula promise ke eksathe run korbo , and last e giye
//sob gula result ke eksathe pabo.

/*
const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));


*/

// output:

/*
Promise 1 resolved
Promise 2 resolved
*/

//but amra cassi 2 ta promise eksathe start hobe and finally ekta result return korbe

//in that case we'll use 'Promise.all()'

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});

//output: [ 'Promise 1 resolved', 'Promise 2 resolved' ]


//je promise ta age resolve hoye jay setar result ta se diye dey
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});

//output: Promise1 resolved

