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
    let cardTest = [];
    for (let i = 0; i < 16; i++) {
      let rando = randomIntFromInterval(1, 100);
      for (let j = 0; j < 2; j++) {
        let card = document.createElement('button');
        card.setAttribute('class', `card`);
        card.innerText = rando;
        cardTest.push(card);
      }
    }

    for (let i = 0; i < 32; i++) {
      let randomCard = cardTest.splice(Math.floor(Math.random() * cardTest.length), 1);
      board.appendChild(randomCard[0]);
    }
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



  populateBoard();
}








window.addEventListener('load', startGame)