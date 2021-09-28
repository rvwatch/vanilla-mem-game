


const startGame = () => {
  const board = document.getElementsByTagName('section')[0];



  const populateBoard = () => {
    let cards = {};
    for(let i = 0; i < 16; i++){
      let rando = randomIntFromInterval(1, 100);
      if(!cards[rando]){
        cards[rando] = 2;
      } else {
        i--
      }
    }
    console.log(cards);
    for (let num of Object.keys(cards)) {
      let card = document.createElement('button');
      card.setAttribute('class', `card ${num}`)
      card.innerText = num;
      board.appendChild(card);
    };
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 6)


  populateBoard();
}








window.addEventListener('load', startGame)