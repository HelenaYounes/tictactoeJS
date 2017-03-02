var count= 0;
var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', test);
}

function test(e) {
//  debugger;
// var n = e.target.dataset.num;
 count++;
  var n = e.target.getAttribute('data-num');
  if(count%2==0){
    if( n.innerHTML == null ){
      e.target.innerHTML = 'X';
    }
  }
  else{
    if(n.innerHTML == null){
      e.target.innerHTML = 'O';
    }
  }
// alert(n);
}

window.addEventListener('load', onLoad);
