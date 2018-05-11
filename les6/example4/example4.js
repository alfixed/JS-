let isError = false;
let result1 = fetch('https://jsonplaceholder.typicode.com/users/1');
let result2 = fetch('https://jsonplaceholder.typicode.com/users/2');
let result3 = fetch('https://jsonplaceholder.typicode.com/users/3');

let isErrorArr = [];
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/users/1'),
  fetch('https://jsonplaceholder.typicode.com/users/2'),
  fetch('https://jsonplaceholder.typicode.com/users/3')
]).then(results => {
  //save
}).catch(function(ex) {
});