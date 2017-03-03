var count= 0;
var emptySymbol = '&nbsp;';
var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', test);
}

function test(e) {
 debugger;
// var n = e.target.dataset.num;
 count++;
  n = e.target.getAttribute('data-num');
  if(count%2==0){
    if( e.target.innerHTML ==emptySymbol){
      e.target.innerHTML = 'X';
    }
  }
  else{
    if(e.target.innerHTML ==emptySymbol){
      e.target.in7unerHTML = 'O';
    }
  }
// alert(n);
}
//
// function isEmpty(e){
//   if(e.target.innerHTML== ','){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

window.addEventListener('load', onLoad);
