//instance class fields - public instance class fields
function getClass(){
  class C {
    x = 'x';
  }
  document.getElementById("class").innerHTML =  (new C().x === 'x') ? 'sucsses' : 'fail';
}
window.getClass = getClass;
  
//static class fields - public static class fields
function getStaticClass() {
  class C {
    static x = 'x';
  }
  document.getElementById("staticClass").innerHTML = (C.x === 'x') ? 'sucsses' : 'fail';
}
window.getStaticClass = getStaticClass;
  