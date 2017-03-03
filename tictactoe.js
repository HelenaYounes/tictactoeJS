var count= 0;
var emptySymbol = '&nbsp;';


var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', test, checkNearbyCell);
  var resetall = document.querySelector('.reseter');
  resetall.addEventListener('click',reset);
  // var check = document.querySelector('.checker');
  // check.addEventListener('click',checkNearbyCell);
}

function test(e) {
// debugger;
// var n = e.target.dataset.num;
// var element = e.target.getAttribute('data-num');
 var i = 0;
 var j= 0;
 count++;
  n = e.target.getAttribute('data-num');
  var cellClicked = e.target;
  var content = cellClicked.innerHTML;
  if(count%2==0){
    if(cellClicked.innerHTML ==emptySymbol){
      cellClicked.innerHTML = 'X';
    }
  }
  else{
    if(cellClicked.innerHTML ==emptySymbol){
      cellClicked.innerHTML  = 'O';
    }
  }
  checkNearbyCell();
}


function reset(){
  //debugger;
  var i = 0;
  var j = 0;
  var table = document.getElementById('myTable');
  for ( i = 0 ; i< table.rows.length ; i++) {
    var cell = table.rows[i].cells;
    for(j = 0; j<cell.length; j++){
      cell[j].innerHTML = emptySymbol;
    }
  }
 }

function checkNearbyCell(){
  //debugger;
  var table = document. getElementById('myTable');
  for(i = 1; i<table.rows.length - 1; i++){
    var cellUp = table.rows[i-1];
    var cellDowm = table.rows[i+1];
    var cell = table.rows[i].cells;
    for(j = 1; j<cell.length ; j++){
      if(cell[j].innerHTML != emptySymbol && cell[j].innerHTML == cell[j+1].innerHTML){
        if (cell[j].innerHTML == cell[j-1].innerHTML){
          alert("you win");
        }
      }
      else if (cell[j].innerHTML != emptySymbol && cell[j].innerHTML == cellUp[j].innerHTML ){
        if(cell[j].innerHTML == cellDowm[j].innerHTML){
          alert('You win');
        }
      }
      else{

      }
     }
   }
 }

window.addEventListener('load', onLoad);
