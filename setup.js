function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
}

localStorage.removeItem('boatCoordinates')

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
    document.querySelector('.option-container').style.flexDirection = "column";
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

// Creating Ships
class Ship {
  constructor(name, length) {
    this.name = name
    this.length = length
  } 
}

const destroyer = new Ship('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]
let notDropped

function addShipPiece(user, angle, ship, startId) {
  const allBoardBlocks = document.querySelectorAll(`#${user} div`)
  let randomBoolean = Math.random() < 0.5
  let isHorizontal = user === 'player' ? angle === 0 : randomBoolean
  
  let startIndex = startId ? startId : randomStartIndex 

  let validStart = isHorizontal ? startIndex <= width * width - ship.length ? startIndex :
      width * width - ship.length :
      // handle vertical
      startIndex <= width * width - width * ship.length ? startIndex :
        startIndex - ship.length * width + width

  let shipBlocks = []

  for (let i = 0; i < ship.length; i++){
    if (isHorizontal) {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i])
    }
    else {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i * width])
    }
  }

  let valid

  if (isHorizontal) {
    shipBlocks.every((_shipBlock, index) =>
      valid = shipBlocks[0].id % width != width - (shipBlocks.length - (index + 1)))
  }
  else {
    shipBlocks.every((_shipBlock, index) =>
      valid = shipBlocks[0].id < 90 + (width * index + 1))
  }

  const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains(`taken`))

  if (valid && notTaken) {
    shipBlocks.forEach(shipBlock => {
      shipBlock.classList.add(ship.name)
      shipBlock.classList.add(`taken`)
    })
  }
  else {
    notDropped = true
  }
}

let draggedShip
const optionShips = Array.from(optionContainer.children)
optionShips.forEach(optionShip => optionShip.addEventListener(`dragstart`, dragStart))

const allPlayerBlocks = document.querySelectorAll('#player div')
allPlayerBlocks.forEach(playerBlock => {
  playerBlock.addEventListener('dragover', dragOver)
  playerBlock.addEventListener('drop', dropShip)
})

function dragStart(e) {
  notDropped = false
  draggedShip = e.target;
}

function dragOver(e) {
  e.preventDefault()
}

function dropShip(e){
  const startId = e.target.id
  const ship = ships[draggedShip.id]
  const user = 'player'
  let boatCoordinates = [];
  const boatCoordinatesText = localStorage.getItem('boatCoordinates')
  if (boatCoordinatesText) {
    boatCoordinates = JSON.parse(boatCoordinatesText);
  }
  boatCoordinates = updateBoatCoordinates(user, angle, ship, startId, boatCoordinates)
  
  localStorage.setItem('boatCoordinates', JSON.stringify(boatCoordinates));
  addShipPiece('player', angle, ship, startId)
  if (!notDropped) {
    draggedShip.remove()
  }
}

function updateBoatCoordinates(user, angle, ship, startId, boatCoordinates) {
  if (!Array.isArray(boatCoordinates)) {
    boatCoordinates = [];
  }

  const newBoat = { name: user, angle: angle, ship: ship, startId: startId };
  boatCoordinates.push(newBoat);

  return boatCoordinates;
}

const startButton = document.querySelector('#start-button')
const infoDisplay = document.querySelector('#info')
let gameOver = false
let playerTurn


startButton.addEventListener('click', startGame)
//Start Game
function startGame() {
  if (playerTurn === undefined) {
    if(optionContainer.children.length != 0)
    {
      infoDisplay.textContent = 'Please place all your pieces first'
    }
    else {
      window.location = "play.html"
    }
  }
}