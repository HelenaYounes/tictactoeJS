var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', test);

};

function test(e) {
//  debugger;
  // var n = e.target.dataset.num;
  var n = e.target.getAttribute('data-num');
  if( n.innerHTML!='X' || n.innerHTML!='O'){
    e.target.innerHTML = 'X';
  }
  alert(n);
}

window.addEventListener('load', onLoad);
