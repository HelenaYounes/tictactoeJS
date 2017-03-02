var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', test);

};

function test(e) {
//  debugger;
  // var n = e.target.dataset.num;
  var n = e.target.getAttribute('data-num');
  if(n=='01'){
    e.target.innerHTML = 'X';
  }
  alert(n);
}

window.addEventListener('load', onLoad);
