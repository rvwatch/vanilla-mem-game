const startGame = () => {
  const board = document.getElementsByTagName('section')[0];

  const manageBoard = () => {
    let flippable = true;

    let cardList = [];
    for (let i = 0; i < 16; i++) {
      //TODO: Need to filter for more than 2 duplicates
      // get random number if 2 instances of the rando number already exist, re-run randomNumber before moving on 
      let rando = randomNum(1, 100);

      for (let j = 0; j < 2; j++) {
        let card = document.createElement('article');
        let cardFront = document.createElement('button');
        let cardBack = document.createElement('button');

        card.classList.add('card');
        cardFront.classList.add('front');
        cardBack.classList.add('back');
        cardBack.innerText = rando;

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        cardList.push(card);
      }
    }

    for (let i = 0; i < 32; i++) {
      const rando = randomNum(0, cardList.length - 1);
      let randomCard = cardList.splice(rando, 1)[0];
      board.appendChild(randomCard);
      // console.log(randomCard.innerText); uncomment to view list of numbers
    }


    const handleCardSelect = event => {
      if (flippable) {
        event.target.parentElement.classList.add('is-flipped');
      }

      let selected = document.querySelectorAll('.is-flipped');
      if (selected.length === 2) {
        flippable = false;
        checkForMatch(selected);
      }
    }

    const checkForMatch = (selected) => {
      let firstCard = selected[0];
      let secondCard = selected[1];

      if (firstCard.innerText === secondCard.innerText) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
        firstCard.removeEventListener('click', handleCardSelect);
        secondCard.removeEventListener('click', handleCardSelect);
        flippable = true;
        checkForWin()
      } else {
        setTimeout(() => {
          firstCard.classList.remove('is-flipped');
          secondCard.classList.remove('is-flipped');
          flippable = true;
        }, 1000);
      }
    }

    const checkForWin = () => {
      let allMatched = document.querySelectorAll('.matched');

      if (allMatched.length === 32) {
        setTimeout(() => {
          alert('YOU WIN!!');
        }, 1000)

      }
    }

    let cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', handleCardSelect));
  }

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  manageBoard();
}

window.addEventListener('load', startGame)