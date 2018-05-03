// var result = fetch('https://api.github.com')
// result.then(function(response) {
//   console.log('response', response)
//   console.log('header', response.headers.get('Content-Type'))
//   return response.text()
// }).then(function(text) {
//   console.log('got text', text)
// }).catch(function(ex) {
//   console.log('failed', ex)
// })

let isError = false;
let result = fetch('https://jsonplaceholder.typicode.com/users/1')
result.then(function(response) {
  console.log('response', response)
  return response.text()
}).then(function(text) {
  console.log('got text', text)
}).catch(function(ex) {
  console.log('failed', ex)
  isError = true;
})
console.log(isError);