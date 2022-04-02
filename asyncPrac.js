const async = require('async');
const axios = require('axios');

const asyncFunc1 = async () => {
  console.log("Async function 1");
}

const asyncFunc2 = async () => {
  let obj = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
  console.log(obj.data)
  console.log("Async function 2");
}

// will need to wrap function (setTimeout) in a promise since it doesn't return a promise
const promiseTimeout = async () => {
  return new Promise((resolve, reject) => {
    resolve(console.log("promise timeout"));
  });
};

(async () => {
  console.log('before start----------------------');

  await asyncFunc2();

  // this will not work******
  // await setTimeout(() => {
  //   console.log("setTimeout call");
  // }, 50);

  await promiseTimeout();

  await asyncFunc1();

  console.log('after start-----------------------');
})();