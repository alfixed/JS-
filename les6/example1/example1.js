const { readFile, readFileSync } = require('fs');

function tmpSync() {
  const content1 = readFileSync('test1.json', 'utf-8');
  const content2 = readFileSync('test2.json', 'utf-8');
  const content3 = readFileSync('test3.json', 'utf-8');
}
let DateEnd;
function createReadAsyncWithBenchmark(filesArray, numberOfCalls) {
  let DateStart = new Date();
  let numberOfFiles = filesArray.length;
  let leftFiles = numberOfFiles * numberOfCalls;
  return () => {
    for (var i = 0; i < numberOfCalls; i++) {
      for (var j=0; j < numberOfFiles; j++) {
        readFile(filesArray[j],'utf8', (error, text) => {
          if (!error) {
            leftFiles--;
            if (leftFiles === 0) {
              DateEnd = new Date();
              console.log('Время асинхронного чтения: ' + (DateEnd - DateStart) + 'мс');
            }
          } else {
            console.log('error...', error);
            DateEnd = new Date();
          }
        })
      }
    }
  }
}

function tmpAsync(i) {
  const readAsync = createReadAsyncWithBenchmark(['test1.json', 'test2.json', 'test3.json'], i);
  readAsync();
}

function benchSync(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f();
  return new Date() - date;
}

function benchAsync(f) {
  f(1000);
}

console.log( 'Время синхронного чтения: ' + benchSync(tmpSync) + 'мс' );
benchAsync(tmpAsync);
