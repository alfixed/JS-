//Array.prototype.flat
import flat from 'array.prototype.flat';

function getFlat() {
  console.log(flat([1, [2, 3], [4, [5, 6]]]).join('')); // [1, [2, 3], [4, [5, 6]]].flat().join('') === '12345,6';

  document.getElementById("flat").innerHTML = 'sucsses';
}
window.getFlat = getFlat;
  
//String.prototype.trimLeft
import trimLeft from '../lib/trimLeft.js';

function getTrimLeft() {
  console.log(trimLeft('Test')); // est

  document.getElementById("trimLeft").innerHTML = 'sucsses';
}
window.getTrimLeft = getTrimLeft;
  