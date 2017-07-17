# Guess-the-Song

![Image of Screenshot](https://github.com/seyesij/Project1-Game/blob/master/gamescreenshot.png)

## What is Guess-the-Song?

> This is a fun guessing game in which you have to match the name of the song snippets you hear correctly with the options given before time runs out.

## Technical Discussion

> This game will be built with HTML, CSS and JavaScript.

### Notes on Game Structure

> Code samples
- function checkWin() {
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

- .answers:hover {
  background: white;
  color: black;
  font-weight: 599;
  box-shadow: 0 8px 16px rgba(199,21,133,0.4);
}

> Description of challenges you overcame, etc.
Some functions were quite difficult to figure out for example, getting the game to play the next song after one had ended was quite challenging. When I used a loop it kept on playing all songs at the same time.  

## The Making of Guess-the-Song

> Any credits or notes you feel you should add
- https://www.sitepoint.com/jquery-settimeout-function-examples/
- Help with next song function from Liam Schauerman (https://stackoverflow.com/a/27995683)

## Opportunities for Future Growth

> If you had more time to work on your game, what would you do?
-	Add levels; right now it just has 1 level. 
-	Add a local storage for high scores
- Add some animation styling

