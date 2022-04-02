const async = require('async');
const axios = require('axios');

const arrayWords = ["android", "asparagus", "motel", "freezer"];
let arrayResponses = [];

// callback -> executed at the end of every iteration
// index -> this is the index of array or key for object
// 1 -> the number of parallel async calls to make
async.forEachOfLimit(arrayWords, 4, (value, index, callback) => {
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((response) => {
      arrayResponses[index] = response.data[0].word;
      callback(null); // callback(null); // this needs to be here for forEach to keep executing
    });
})
  .then(() => {
    console.log(arrayResponses);
  })


