// // 生成一個隨機的4位數字
// let randomNumber = generateRandomNumber();

// function generateRandomNumber() {
//   let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let randomNum = '';
//   for (let i = 0; i < 4; i++) {
//     const index = Math.floor(Math.random() * numbers.length);
//     randomNum += numbers[index];
//     numbers.splice(index, 1);
//   }
//   return randomNum;
// }

// function checkGuess() {
//   const guess = document.getElementById('guessInput').value;
  
//   if (guess.length !== 4 || !/^\d+$/.test(guess)) {
//     document.getElementById('result').textContent = '請輸入一個有效的4位數字。';
//     return;
//   }

//   let bulls = 0;
//   let cows = 0;

//   for (let i = 0; i < 4; i++) {
//     if (guess[i] === randomNumber[i]) {
//       bulls++;
//     } else if (randomNumber.includes(guess[i])) {
//       cows++;
//     }
//   }

//   if (bulls === 4) {
//     document.getElementById('result').textContent = '恭喜你！你猜對了！';
//   } else {
//     document.getElementById('result').textContent = `A（數字和位置都對）：${bulls}，B（數字對位置不對）：${cows}`;
//   }
// }



let randomNumber = generateRandomNumber();
let guesses = [];

function generateRandomNumber() {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let randomNum = '';
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    randomNum += numbers[index];
    numbers.splice(index, 1);
  }
  return randomNum;
}


// function displayHints() {
//   const hintsElement = document.getElementById('ABHints');
//   hintsElement.style.display = 'block';
// }



function checkGuess() {
  const guess = document.getElementById('guessInput').value;
  
  if (guess.length !== 4 || !/^\d+$/.test(guess)) {
    document.getElementById('result').textContent = '請輸入一個有效的4位數字。';
    return;
  }

  let bulls = 0; // A
  let cows = 0; // B

  for (let i = 0; i < 4; i++) {
    if (guess[i] === randomNumber[i]) {
      bulls++;
    } else if (randomNumber.includes(guess[i])) {
      cows++;
    }
  }

  const resultText = (bulls === 4) ? '恭喜你！你猜對了！' : `A：${bulls}， B：${cows}`;
  document.getElementById('result').textContent = resultText;


  const guessResult = {
    guess: guess,
    result: resultText
  };
  guesses.push(guessResult);
  displayGuessHistory();
}

function displayGuessHistory() {
  let history = '<h3>猜測歷史：</h3><ul>';
  guesses.forEach((guess, index) => {
    history += `<li>猜測 ${index + 1}：${guess.guess} - ${guess.result}</li>`;
  });
  history += '</ul>';
  document.getElementById('guessHistory').innerHTML = history;
}

