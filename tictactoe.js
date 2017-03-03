var count= 0;

var emptySymbol = '&nbsp;';
var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', test);
  var resetall = document.querySelector('.buttons');
  resetall.addEventListener('click',reset);
}

function test(e) {
 debugger;
// var n = e.target.dataset.num;
 count++;
  n = e.target.getAttribute('data-num');
  var cell = e.target;
  var content = cell.innerHTML;
  var element = e.target.getAttribute('data-num');
  if(count%2==0){
    if(cell.innerHTML ==emptySymbol){
      cell.innerHTML = 'X';
    }
  }
  else{
    if(cell.innerHTML ==emptySymbol){
      cell.innerHTML  = 'O';
    }
  }
}

function reset(){
  debugger;
  var table = document.getElementById('myTable');
  var i =0;
  var j = 0;
  for ( i = 0 ; i< table.rows.length ; i++) {
    var cell = table.rows[i].cells;
    for(j = 0; j<cell.length; j++){
      cell[j].innerHTML = emptySymbol;
    }
  }
 }
 
window.addEventListener('load', onLoad);
