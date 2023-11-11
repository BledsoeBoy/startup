function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
}

const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')
const gamesBoardContainer = document.querySelector('#gamesboard-container')
const width = 10

let angle = 0;
function flip() {
  const optionShips = Array.from(optionContainer.children)
  if (angle === 0){
    angle = 90;
  } else {
    angle = 0;
  }
  optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

flipButton.addEventListener('click', flip)

function createBoard(color, user) {
  const gameBoardContainer = document.createElement('div')
  gameBoardContainer.classList.add('game-board')
  gameBoardContainer.style.backgroundColor = color
  gameBoardContainer.id = user
  
  for (let i = 0; i < width * width; i++){
    const block = document.createElement('div')
    block.classList.add('block')
    block.id = i
    gameBoardContainer.append(block)
  }

  gamesBoardContainer.append(gameBoardContainer)
}

createBoard('hsl(200, 100%, 50%)', 'player')

function boat1Data() {
  let boat1 = [];
  const start = document.querySelector('.boat1Start').value;
  const end = document.querySelector('.boat1End').value;
  const data = {
    start,
    end,
  }
  boat1.push(data);
  let string = JSON.stringify(boat1);
  localStorage.setItem("boat1info", string);
  console.log("Working");
  const booatCoord = document.getElementById('boat-coordinates-1').style.display = 'none';    
}


let draggedShip
const optionShips = Array.from(optionContainer.children)
optionShips.forEach(optionShips => optionShip.addeventListener('dragstart', dragStart))

const allPlayerBlocks = document.querySelectorAll('#player div')
allPlayerBlocks.forEach(playerBlock => {
  playerBlock.addEventListener('dragover', dragOver)
  playerBlock.addEventListener('drop', dropShip )
})

function dragStart(e) {
  draggedShip = e.target;
}

function dragOver(e) {
  e.preventDefault()
}

function dropShip(e){
  const startId = e.target.id
  const ship = ships[draggedShip.id]
  addShipPiece('player',ship, startId)
}