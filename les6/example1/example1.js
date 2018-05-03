const { readFile } = require('fs');

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

function tmpSync(){
  p1.then(text => {
      //console.log(text);
  })
  .catch(error => {
      //console.log(error);
  });

  p2.then(text => {
      //console.log(text);
  })
  .catch(error => {
      //console.log(error);
  });

  p3.then(text => {
    //console.log(text);
  })
  .catch(error => {
    //console.log(error);
  });
}

function tmpAsync(){
  loadFileAsync('test1.json')
  .then(result1 => {
    //console.log(1, result1);
    return loadFileAsync('test2.json');
  })
  .then(result2 => {
    //console.log(2, result2);
    return loadFileAsync('test3.json');
  })
  .then(result3 => {
    //console.log(3, result3);
  })
  .catch(error => {
      //console.log(error);
  })
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 10000; i++) f();
  return new Date() - date;
}

console.log( 'Время синхронного чтения: ' + bench(tmpSync) + 'мс' );
console.log( 'Время асинхронного чтения: ' + bench(tmpAsync) + 'мс' );