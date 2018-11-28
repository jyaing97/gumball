function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess = 83) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount > 83) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
      } else if (guessCount < 83) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < 83) {
      lowOrHi.textContent = 'Last guess was too low!';
      $("#answer").text("Last guess was too low!");
    } else if(userGuess > 83) {
      lowOrHi.textContent = 'Last guess was too high!';
      $("#answer").text("Last guess was too high!");
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

