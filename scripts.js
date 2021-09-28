const startGame = () => {
  const board = document.getElementsByTagName('section')[0];

  // I want to create 2 buttons per num in an array of 16 random nums
  // They need to be rendered to the page in random locations
  // the two cards need to be associated somehow or their vals equated when selected
  // create a random array of 16 nums between 0-100
  // loop over the array
  //    loop over every num in array twice
  //       create button element with num val
  //       add class to button
  //       append button to section -- this needs to be randomized
  //           add this html to an array? randomize index placement?
  //        
  //           


  const populateBoard = () => {
    let cardList = [];
    for (let i = 0; i < 16; i++) {
      let rando = randomNum(1, 100);
      for (let j = 0; j < 2; j++) {
        let card = document.createElement('article');
        let cardFront = document.createElement('button');
        let cardBack = document.createElement('button');
        card.setAttribute('class', `card`);
        cardFront.setAttribute('class', `front`);
        cardBack.setAttribute('class', `back`);
        cardBack.innerText = rando;

        card.appendChild(cardFront);
        card.appendChild(cardBack);
        
        cardList.push(card);
      }
    }
    
    for (let i = 0; i < 32; i++) {
      
      const rando = randomNum(0, cardList.length - 1);
      let randomCard = cardList.splice(rando, 1);
      board.appendChild(randomCard[0]);
    }

    let cards = document.querySelectorAll('.card');
    
    const manageCards = event => {
      console.log(event.target.classList)
    }

    cards.forEach(card => card.addEventListener('click', manageCards));

  }

  const randomNum = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



  populateBoard();
}








window.addEventListener('load', startGame)