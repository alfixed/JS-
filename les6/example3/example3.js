const fetch = require('node-fetch');

function tmpFetch0(){
	let data = {file1: '', file2: '', file3: ''};
	fetch('https://jsonplaceholder.typicode.com/users/1')
		.then(res => res.json())
		.then(response => {
			data.file1 = response;
			return fetch('https://jsonplaceholder.typicode.com/users/2');
		})
		.then(res => res.json())
		.then(response => {
			data.file2 = response;
			return fetch('https://jsonplaceholder.typicode.com/users/3');
		})
		.then(res => res.json())
		.then(response => {
			data.file3 = response;
		})
		.then(() => { 
      console.log(data); 
    })
		.catch((error) => {
      console.log(`error: ${error}`);
    })
}

tmpFetch0();