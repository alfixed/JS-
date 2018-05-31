const fetch = require('node-fetch');

async function fetchJson(url) {
  try {
    let request = await fetch(url);
    let text = await request.text();
    return JSON.parse(text);
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

let data = {file1: '', file2: '', file3: ''};
fetchJson('https://jsonplaceholder.typicode.com/users/1')
	.then(response => {
		data.file1 = response;
		return fetchJson('https://jsonplaceholder.typicode.com/users/2');
	})
	.then(response => {
		data.file2 = response;
		return fetchJson('https://jsonplaceholder.typicode.com/users/3');
	})
	.then(response => {
		data.file3 = response;
	})
	.then(() => { 
		console.log(data); 
	})
	.catch((error) => {
		console.log(`error: ${error}`);
	})
	