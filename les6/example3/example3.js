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
let result1 = fetch('https://jsonplaceholder.typicode.com/users/1');
let result2 = fetch('https://jsonplaceholder.typicode.com/users/2');
let result3 = fetch('https://jsonplaceholder.typicode.com/users/3');

//сохранить информацию, только в случае если они все доступны./Если какие-то из сайтов не доступны, то вернуть ошибку
// result1.then(function(response) {
//   return response.text()
// }).then(function(text) {
//   return result2.then(function(response) {
//     return response.text()
//   });
// }).then(function(text) {
//   return result3.then(function(response) {
//     return response.text()
//   });
// }).then(function(text) {
//}).catch(function(ex) {
//   isError = true;
// }).finally(function() { 
//   if(!isError){
//     //save
//   } else{
//     //error
//   }
// });

//Если какие-то из сайтов не доступны, то сохранить инфу по доступным сайта и вернуть ошибку, только если все три недоступны
let isErrorArr = [];
result1.then(function(response) {
  return response.text()
}).catch(function(ex) {
  isErrorArr.push(true);
}).then(function(text) {
  //save
  return result2.then(function(response) {
    return response.text()
  });
}).catch(function(ex) {
  isErrorArr.push(true);
}).then(function(text) {
  //save
  return result3.then(function(response) {
    return response.text()
  });
}).then(function(text) {
    //save
}).catch(function(ex) {
  isErrorArr.push(true);
}).finally(function() { 
  if(isErrorArr.length > 0 && isErrorArr.indexOf(false) == -1){
    //error
  }
});