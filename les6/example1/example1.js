const { readFile, readFileSync } = require('fs');

function tmpSync() {
  const content1 = readFileSync('test1.json', 'utf-8');
  const content2 = readFileSync('test2.json', 'utf-8');
  const content3 = readFileSync('test3.json', 'utf-8');
}
let DateEnd;
function createReadAsyncWithBenchmark(numberOfFiles) {
  let leftFiles = numberOfFiles;
  return (fileName, i) => {
    readFile(fileName,'utf8', (error, text) => {
      if (!error) {
        leftFiles--;
        if (leftFiles === 0) {
          if(i == 999){
            DateEnd = new Date();
          }
        }
      } else {
        console.log('error...', error);
        DateEnd = new Date();
      }
    })
  }
}

function tmpAsync(i) {
  const readAsync = createReadAsyncWithBenchmark(3);
  readAsync('test1.json', i);
  readAsync('test2.json', i);
  readAsync('test3.json', i);
}

function benchSync(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f();
  return new Date() - date;
}

function benchAsync(f) {
  let DateStart = new Date();
   for (let i = 0; i < 1000; i++) {
      f(i);
   }

  var timerId = setInterval(function() {
    if (DateEnd) {
      clearInterval(timerId);
      console.log('Время асинхронного чтения: ' + (DateEnd - DateStart) + 'мс');
    }
  }, 100);
}

console.log( 'Время синхронного чтения: ' + benchSync(tmpSync) + 'мс' );
benchAsync(tmpAsync);