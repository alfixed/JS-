const request = require("request");
function httpGet(url) {
  return new Promise(
    (resolve, reject) => {
      request.get(url, (error, response, body) => {
        if (error) {
          reject(new Error('request Error: ' + error));
        } else {
          resolve(body);
        }
      });
    });
}

async function foo() {
  const res = await httpGet('https://nodejs.org/api/http.html');
  console.log(res);
  return res;
}

foo()
.then((value) => {
  console.log('Contents: ' + value);
})
.catch((reason) => {
  console.error('Something went wrong', reason);
});

