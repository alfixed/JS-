// Отлично поработал - использовал весь синтакс кроме for loop
// Ну и я не понял, как в твои крестики-нолики играть :)
'use strict';

let place;
let playerOne = [[0,0],[0,1],[1,0]];
let playerTwo = [...playerOne];

playerTwo.forEach(function(element, index, arr){
  let tmpIndex = index;
  element.forEach(function(element, index, arr){
    if(tmpIndex === 0){
      arr[index] = 1;
    }
    else{
      if(arr[index] !== 0){
        arr[index] += 1;
      }
    }
  });
});

function createPlace(...arg){
  place = arg;
}

createPlace(0,0,0);

function initPlace(arg){
  arg.map(function(element, index, arr) {
    arr[index] = [-1,-1,-1];
  });
  
  arg.forEach(function(element){
  element.forEach(function(element){
    if(element !== -1){
      console.log('Initialization error for game');
    }
  });
});
}

initPlace(place);

for(let i = 0; i < playerOne.length; i++){
  place[playerOne[i][0]][playerOne[i][1]] = 1;
  place[playerTwo[i][0]][playerTwo[i][1]] = 0;
}

const metadata = {
  title: 'Winner',
  playerOne: 'playerOne',
  playerTwo: 'playerTwo'

};
const {title, playerTwo: winner} = metadata;

setTimeout(console.log(`${title} ${winner}`), 1000);