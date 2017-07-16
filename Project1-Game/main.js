
function displayAnswers() {
  document.getElementById('sec3').style.display = "block";
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
 }

let timer = 8;
function countdown() {
   document.getElementById("timer").innerHTML = timer;
   let time = setInterval(function() {
    if (timer === 0) {
      timer = 8;
    } else {
    timer --;
  }
  document.getElementById("timer").innerHTML = timer;
  }, 900);
   //end timer after 81 seconds
   setTimeout(function(countdown){
   clearInterval(time);
   checkWin();
   document.getElementById('playagain').style.display = "block";
   document.getElementById('sec3').style.display = "none";
   document.getElementById('timer').style.display = "none";
 }, 81000);
}


let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let song5 = document.getElementById("song5");
let song6 = document.getElementById("song6");
let song7 = document.getElementById("song7");
let song8 = document.getElementById("song8");
let song9 = document.getElementById("song9");
let song10 = document.getElementById("song10");

let songOrder = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10];

//function taken from Liam Schauerman (https://stackoverflow.com/a/27995683)
var currentSong=0;
function playMusic(){
  songOrder[currentSong].play();
  songOrder[currentSong].addEventListener('ended', function(){
    currentSong++;
    if(currentSong<songOrder.length){
      playMusic(currentSong);
    }
  });
}

//assigning answer to button
var answerChoice;

$('#ans1').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans2').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans3').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans4').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans5').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans6').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans7').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans8').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans9').on('click', function(){
 answerChoice = $(this).text();
});

$('#ans10').on('click', function(){
 answerChoice = $(this).text();
});


//check a answer and add/subtract points to game when answer is correct/incorrect
var points = 0;

function checkIfRight(){
  if (answerChoice == $(`#song${currentSong+1}`).text()) {
  setMessage('Good Job!');
  $('#message').fadeIn().delay(500).fadeOut();
  $('#message').css('color', 'green');
  points += 100;
  $('#points').text(points);
 } else {
  setMessage('Not quite.');
  $('#message').fadeIn().delay(500).fadeOut();
  $('#message').css('color', 'red');
  points -= 50;
  $('#points').text(points);
  }
}

function checkWin() {
  let totalpoints = $('#points').text();
  if (totalpoints >= 700) {
    setMessage('Awesome, you passed this level!!!!!')
    $('#message').css('display', 'block');
    $('#message').css('font-size', '25px');
    $('#message').css('color', 'green');
  } else {
    setMessage('Sorry, you lost. Try again?');
    $('#message').css('display', 'block');
    $('#message').css('font-size', '25px');
    $('#message').css('color', 'red');
  }
}

function playAgain() {
    document.location.href = "";
}


document.getElementById("play").addEventListener("click", countdown);
document.getElementById("play").addEventListener("click", displayAnswers);
document.getElementById("sec3").addEventListener("click", checkIfRight);
document.getElementById("play").addEventListener("click", playMusic);











