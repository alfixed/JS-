//async functions / await
function printTest(){
  console.log('test');
}
async function callTest() {
  await printTest();
}

callTest();
