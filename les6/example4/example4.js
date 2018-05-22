const fetch = require('node-fetch');

function successful(){
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1'),
    fetch('https://jsonplaceholder.typicode.com/users/2'),
    fetch('https://jsonplaceholder.typicode.com/users/3')
  ]).then(value => { 
    console.log(value);
  }, reason => {
    console.log(`error successful: ${reason}`);
  });
}

function unsuccessful(){
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users1/1'),
    fetch('https://jsonplaceholder.typicode.com/users/2'),
    fetch('https://jsonplaceholder.tyicode.com/users/3')
  ]).then(value => { 
    console.log(value);
  }, reason => {
    console.log(`error unsuccessful: ${reason}`);
  });
}

successful();
unsuccessful();