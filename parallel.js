const async = require('async');
const axios = require('axios');

let variableToDisplay = "";

const asyncFunc1 = async () => {
  console.log("Async function 1");
}

const asyncFunc2 = async () => {
  let obj = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
  variableToDisplay = obj.data;
  console.log("Async function 2");
}

// use PARALLEL when we have to run multiple tasks independent of each other without waiting until the previous task has completed
// if one async fails, all will fail. Instead, wrap your function with async reflect
async.parallel([
  // async () => Promise.reject("dislike") // this will fail the whole thing
  async.reflect(async () => Promise.reject("dislike")),
  async () => await asyncFunc2(),
  async () => await asyncFunc1()
]).then(() => {
  console.log("Display variable in the .then: ", variableToDisplay);
}).catch((error) => {
  console.log(error);
})
