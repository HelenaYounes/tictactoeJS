var clicks= 0;
var emptySymbol = '&nbsp;';
var count = 0;
var player = 1;
var boardLength = 4;
var boardHeight = 4;

var onLoad = function() {
  var board = document.querySelector('.tic');
  board.addEventListener('click', play);
  var resetall = document.querySelector('.reseter');
  resetall.addEventListener('click',reset);
}

function play(e) {
  var i = 0;
  var j= 0;
  clicks++;
  n = e.target.getAttribute('data-num');
  var cellClicked = e.target;
  var content = cellClicked.innerHTML;
  if (clicks % 2) {
    player = 1;
  } else {
    player = 2;
  }
  if(player == 1){
    if(content ==emptySymbol){
      cellClicked.innerHTML = 'X';
    }
  } else if (player == 2){
    if(content ==emptySymbol){
      cellClicked.innerHTML  = 'O';
    }
  }
  // writeToBoard(something);
  var board = readBoard();
  var win = checkBoard(board);
  if (win) {
    alert('player ' + player + ' won');
  }
}

function reset(){
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

 function checkBoard(board) {
    return checkRows(board) || checkCols(board) || checkDiag(board);
 }

function getCell(i, j) {
  var selector = '.row[data-row="'+i+'"] .cells[data-col="'+j+'"]';
  var cell = document.querySelector( selector );
  return cell;
}

function getCol(board, c) {
  var col = [];
  for (var i = 0; i < boardHeight; i++) {
    col.push(board[i][c]);
  }
  return col;
}

function checkCols(board) {
  for (var i = 0; i < boardLength; i++) {
    var col = getCol(board, i);
    if ( checkCells(col) ) {
      return true;
    }
  }
  return false;
}

function checkRows(board) {
  for( var i = 0; i<board.length; i++){
    if (checkCells(board[i])) {
      return true;
    };
  }
  return false;
}

function checkCells(cells) {
  if (cells[0] === emptySymbol) {
    return false;
  }
  for(var i = 0; i<cells.length-1; i++){
    var cell = cells[i];
    if( cell != cells[i+1]){
      return false;
    }
  }
  return true;
}

function getDiag1(board) {
  var diag = [];
  for (var i = 0; i < boardLength; i++) {
    diag.push(board[i][i]);
  }
  return diag;
}

function getDiag2(board) {
  var diag = [];
  for (var i = 0; i < boardLength; i++) {
    diag.push(board[i][boardLength-i-1]);
  }
  return diag;
}

function checkDiag(board) {
  var diag1 = getDiag1(board);
  var diag2 = getDiag2(board);
  return checkCells(diag1) || checkCells(diag2);
}

function readRow(r) {
  var row = [];
  for (var i = 0; i < boardHeight; i++) {
    row.push( getCell(r, i).innerHTML );
  }
  return row;
}

function readBoard() {
  var board = [];
  for (var i = 0; i < boardLength; i++) {
    board[i] = readRow(i);
  }
  return board;
}

window.addEventListener('load', onLoad);
