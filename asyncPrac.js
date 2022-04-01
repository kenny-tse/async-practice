const async = require('async');
const axios = require('axios')

const asyncFunc1 = async () => {
  console.log("Async function 1")
}

const asyncFunc2 = async () => {
  let obj = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
  console.log(obj.data)
  console.log("Async function 2");
}

(async () => {
  console.log('before start----------------------');
  await asyncFunc2();
  await asyncFunc1();
  console.log('after start-----------------------');
})();