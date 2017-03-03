var count= 0;
var emptySymbol = '&nbsp;';

var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', test);
  // var resetbutton = document.querySelector('.reseter');
  // resetbutton.addEventListener('click', reset);
}

function test(e) {
 debugger;
  count++;
  var cell = e.target;
  var content = cell.innerHTML;
  if(count%2 == 0){
    if(e.target.innerHTML == emptySymbol){
      content = 'X';
    }
  }
  else{
    if(e.target.innerHTML == emptySymbol){
      content = 'O';
    }
  }
}

window.addEventListener('load', onLoad);

// function reset(){
//   var table = document.getElementsByClassName('cells');
//   var tableContent = table.innerHTML;
//   tableContent= null;
// }

// function isEmpty(element){
//   result = false;
//   if(element == emptySymbol){
//     result = true;
//   }
//   return result;
// }


// var n = e.target.dataset.num;
//  n = e.target.getAttribute('data-num');
