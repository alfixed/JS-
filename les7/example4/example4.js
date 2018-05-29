const fetch = require('node-fetch');

async function fetchJson(url) {
  try {
    let request = await fetch(url);
    let text = await request.text();
    return JSON.parse(text);
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

function successful(){
  Promise.all([
    fetchJson('https://jsonplaceholder.typicode.com/users/1'),
    fetchJson('https://jsonplaceholder.typicode.com/users/2'),
    fetchJson('https://jsonplaceholder.typicode.com/users/3')
  ]).then(value => { 
    console.log(value);
  }, reason => {
    console.log(`error successful: ${reason}`);
  });
}

function unsuccessful(){
  Promise.all([
    fetchJson('https://jsonplaceholder.typicode.com/users1/1'),
    fetchJson('https://jsonplaceholder.typicode.com/users/2'),
    fetchJson('https://jsonplaceholder.tyicode.com/users/3')
  ]).then(value => { 
    console.log(value);
  }, reason => {
    console.log(`error unsuccessful: ${reason}`);
  });
}

successful();
unsuccessful();