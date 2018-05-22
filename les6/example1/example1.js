const { readFile, readFileSync } = require('fs');

function tmpSync() {
  const content1 = readFileSync('test1.json', 'utf-8');
  const content2 = readFileSync('test2.json', 'utf-8');
  const content3 = readFileSync('test3.json', 'utf-8');
}

function createReadAsyncWithBenchmark(numberOfFiles) {
  const start = Date.now();
  let leftFiles = numberOfFiles;
  return (fileName) => {
    readFile(fileName,'utf8', (error, text) => {
      if (!error) {
        leftFiles--;
        if (leftFiles === 0) {
        }
      } else {
        console.log('error...', error);
      }
    })
  }
}

function tmpAsync() {
  const readAsync = createReadAsyncWithBenchmark(3);
  readAsync('test1.json');
  readAsync('test2.json');
  readAsync('test3.json');
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f();
  return new Date() - date;
}

console.log( 'Время синхронного чтения: ' + bench(tmpSync) + 'мс' );
console.log( 'Время асинхронного чтения: ' + bench(tmpAsync) + 'мс' );