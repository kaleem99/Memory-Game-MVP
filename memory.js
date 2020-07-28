// var array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
var array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
var back = "";
var one;
var two;
var cardsHit = 0;
var numChosenCards = 0;

function shuffle() {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle();
var allElements = document.getElementsByClassName("grid-item");

function timer() {
  setTimeout(checkforMatch, 500);
}

function onClick(index){
    if(numChosenCards == 0){
        one = index;
        allElements[index].innerHTML = array[index];
        // console.log('one ' + one);
        numChosenCards = 1;
    }
    else{
        numChosenCards = 2;
        two = index;
        allElements[index].innerHTML = array[index];
        // console.log('two ' + two);
        timer();
    }
}

function    checkIfBoardIsFilled(){
    if(cardsHit == array.length / 2){
        alert('Well done press ok to play again');
        setTimeout(function () {
        location.reload();
        }, 2000);
    }
}

function checkforMatch(){
    if(array[one] == array[two]){
        numChosenCards = 0;
        cardsHit++;
    }
    else if(array[one] !== array[two]){
        allElements[one].innerHTML = back;
        allElements[two].innerHTML = back;
        numChosenCards = 0;
    }
    checkIfBoardIsFilled();
}
