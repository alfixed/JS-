//instance class fields - public instance class fields
function getClass(){
  class C {
    x = 'x';
  }
  document.getElementById("class").innerHTML = 'sucsses';
  return new C().x === 'x';
}
window.getClass = getClass;
  
//static class fields - public static class fields
function getStaticClass() {
  class C {
    static x = 'x';
  }
  document.getElementById("staticClass").innerHTML = 'sucsses';
  return C.x === 'x';
}
window.getStaticClass = getStaticClass;
  