const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById(`current--1`);

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.new');
const btnRoll = document.querySelector('.roll');
const btnHold = document.querySelector('.hold');

let score, activePlayer, currentScore, playing;

const initaial = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  dice.classList.add('hidden');
  dice.classList.add('hidden');

  player0.classList.remove('hidden');
  player1.classList.add('hidden');

  document.querySelector(`.player--${activePlayer}`).classList.remove('win');

  current0.textContent = 0;
  current1.textContent = 0;
};
initaial();
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//when we press roll button
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random number
    const Dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${Dice}.png`;
    //IF NOT 1
    if (Dice !== 1) {
      currentScore += Dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //if 1 is rolled
    } else {
      switchPlayer();
    }
  }
});
//When hold button is pressed
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    if (score[activePlayer] >= 100) {
      playing = false;

      document.getElementById(`name--${activePlayer}`).textContent = `You Win`;
      document.getElementById(`name--${activePlayer}`).style.color = 'White';
      document.querySelector(`.player--${activePlayer}`).classList.add('win');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
//When new button is pressed

btnNew.addEventListener('click', initaial);

btnHold.addEventListener('click', function () {
  if (playing) {
  }
});
