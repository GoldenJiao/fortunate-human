const startButton = document.querySelector('.toss');
const p1playButton = document.querySelector('.p1play');
const p2playButton = document.querySelector('.p2play');
let p1score=0;
let p2score=0;
let playerroll=0;
let randomno=0;
let no=0;
let nam='';
let num=0;

//const info = document.querySelector('');

class player {
  constructor() {
    this.score = 0;
    this.humans = [0, 0, 0, 0, 0];
  }
}

var p1= new player;
var p2= new player;

function startGame(){
  toss();

  return;
}

function toss(){
  randomno = Math.floor(Math.random() * 2);
  console.log(randomno);
  startButton.classList.add('hidden');
  if(randomno==0){
    p1playButton.classList.remove('hidden');

  }
  else{
      p2playButton.classList.remove('hidden');
  }
}




function getBestScore(){

}

function playGame(){
  playerroll = Math.floor(Math.random() * 5);
  if(randomno==0){
    p1.humans[playerroll]+=1;
    if(p1.humans[playerroll]>=5){
    p1.humans[playerroll]=4;

        console.log(p1.humans[playerroll]);
    }

    no = playerroll*2 +1;
    var currenthuman = document.querySelector(`[data-tile='${no}']`);
    nam='o'+(p1.humans[playerroll].toString());
    currenthuman.classList.add(nam);
    nam='o'+(p1.humans[playerroll]-1).toString();
    currenthuman.classList.remove(nam);
    console.log(p1.humans);
    randomno+=1;
    imgupdate();
    p1playButton.classList.add('hidden');
    p2playButton.classList.remove('hidden');

    p1.score+=1;

  }
  else{
    p2.humans[playerroll]+=1;
    if(p2.humans[playerroll]>=5){
    p2.humans[playerroll]=4;

        // console.log(p2.humans[playerroll]);
    }

    no = playerroll*2 +2;
    var currenthuman = document.querySelector(`[data-tile='${no}']`);
    nam='o'+(p2.humans[playerroll].toString());
    currenthuman.classList.add(nam);
    num=p2.humans[playerroll]-1
    nam='o'+(num.toString());
    currenthuman.classList.remove(nam);
    console.log(p2.humans);
    randomno-=1;
    imgupdate();
    p2playButton.classList.add('hidden');
    p1playButton.classList.remove('hidden');

    p2.score+=1;
  }

  checkGameOver();
}

function checkGameOver(){
  if (p1.humans.every( v => v === 4)){

    alert('You won p1!!');
  }

  if (p2.humans.every( v => v === 4) ){
    alert('You won p2!!');
  }

}

function imgupdate(){

  //var head = document.getElementsByClassName("o1");
  //for (let i = 0; i < head.length; i++) {
   //head[i].style.backgroundImage="url(head.jpg)";
//  }
  // var headbody =document.getElementsByClassName("o2");
  // for (let i = 0; i < headbody.length; i++) {
  //  headbody[i].style.backgroundImage="url(head body.jpg)";
  // }
  // var withhands = document.getElementsByClassName("o3");
  // for (let i = 0; i < withhands.length; i++) {
  //  withhands[i].style.backgroundImage="url(with hands.jpg)";
  // }
  // var stickman = document.getElementsByClassName("o4");
  // for (let i = 0; i < stickman.length; i++) {
  //  stickman[i].style.backgroundImage="url(stickman.jpg)";
  // }
}

function getLeaderBoard(){
  arr = JSON.parse(localStorage.getItem("leaderboard"))
  if (arr ==  null){
    return [];
  }
  return arr.sort(function(a, b){return b-a});
}


function saveLeadBoard(new_score){
  let scores = getLeaderBoard();

  scores.sort(function(a, b){return a-b});

  if (scores.length == 4){
  for (let i=0; i<scores.length; i++){
    if (scores[i]<new_score){
      scores[i] = new_score;
      break;
    }
  }
}
  else if (!(new_score in scores)){
    scores.push(new_score);
  }
  scores.sort(function(a, b){return a-b});

  localStorage.setItem("leaderboard", JSON.stringify(scores));
}








startButton.addEventListener('click', startGame);
p1playButton.addEventListener('click', playGame);
p2playButton.addEventListener('click', playGame);
