const { readFile } = require('fs');





function tmpSync(){
  const p1 = new Promise(
    (resolve, reject) => {
      readFile('test1.json', { encoding: 'utf8' },
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
    });
  
  const p2 = new Promise(
    (resolve, reject) => {
      readFile('test2.json', { encoding: 'utf8' },
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
    });
  
  const p3 = new Promise(
    (resolve, reject) => {
      readFile('test3.json', { encoding: 'utf8' },
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
    });
    
  p1.then(text => {
    return p2;
  })
  .then(text => {
    return p3;
  })
  .then(text => {})
  .catch(error => {console.log(error);});
}

function tmpAsync(){
  function loadFileAsync(fileName) {
    return new Promise(
      (resolve, reject) => {
        readFile(fileName, { encoding: 'utf8' },
          (error, data) => {
            if (error) {
              reject(error);
            } else {
              resolve(data);
            }
          });
      });
  }

  loadFileAsync('test1.json')
  .then(result1 => {

    return loadFileAsync('test2.json');
  })
  .then(result2 => {
    return loadFileAsync('test3.json');
  })
  .then(result3 => {})
  .catch(error => {
      console.log(error);
  })
}
function bench(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f();
  return new Date() - date;
}

console.log( 'Время синхронного чтения: ' + bench(tmpSync) + 'мс' );
console.log( 'Время асинхронного чтения: ' + bench(tmpAsync) + 'мс' );