const playerName = document.querySelector('.player-name');
playerName.textContent = getPlayerName();

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Unknown player';
}


function loadScores() {
  let boatCoordinates = [];
  const boatCoordinatesText = localStorage.getItem('boatCoordinates');
  if (boatCoordinatesText) {
    boatCoordinates = JSON.parse(boatCoordinatesText);
}
}

const gamesBoardContainer = document.querySelector('#gamesboard-container')
const width = 10
const infoDisplay = document.querySelector('#info')
const turnDisplay = document.querySelector('#turn-display')

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
createBoard('hsl(200, 100%, 50%)', 'computer')


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

// Setup Computer's board
let angle = 0
function addShipPiece(user, angle, ship, startId) {
  const allBoardBlocks = document.querySelectorAll(`#${user} div`)
  let randomBoolean = Math.random() < 0.5
  let isHorizontal = user === 'player' ? angle === 0 : randomBoolean
  let randomStartIndex = Math.floor(Math.random() * width * width)

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
    if (user === 'computer') addShipPiece('computer', angle, ship)
    if (user === 'player') notDropped = true
  }
}

dropShip()

ships.forEach(ship => addShipPiece('computer', angle, ship))
let draggedShip


function dropShip() {
  let boatCoordinates = []
  const boatCoordinatesText = localStorage.getItem('boatCoordinates');
  if(boatCoordinatesText) {
    boatCoordinates = JSON.parse(boatCoordinatesText);
  }

  if (boatCoordinates.length) {
    for (const [i, boatCoordinate] of boatCoordinates.entries()) {
      const startId = boatCoordinate.startId;
      const ship = boatCoordinate.ship;
      const angle = boatCoordinate.angle;
      const user = 'player';
      addShipPiece(user, angle, ship, startId)
    }
  }
}

//Start Game
let gameOver = false
let playerTurn

startGame()
function startGame() {
  if (playerTurn === undefined) {
      const allBoardBlocks = document.querySelectorAll('#computer div')
      allBoardBlocks.forEach(block => block.addEventListener('click', handleClick))
      playerTurn = true
      turnDisplay.textContent = 'Your Turn!'
      infoDisplay.textContent = 'The game has started'
      turnCount.textContent = turnNumber
  }
}

let playerHits = []
let computerHits = []
const playerSunkShips = []
const computerSunkShips = []

function handleClick(e) {
  if (!gameOver) {
    if (e.target.classList.contains('taken')) {
          e.target.classList.add('boom') 
          infoDisplay.textContent = 'You hit a ship!'
          let classes = Array.from(e.target.classList)
          classes = classes.filter(className => className !== 'block')
          classes = classes.filter(className => className !== 'boom')
          classes = classes.filter(className => className !== 'taken')
          playerHits.push(...classes)
          checkScore('player', playerHits, playerSunkShips)
      }
    if (!e.target.classList.contains('taken')) {
      infoDisplay.textContent = 'Miss!!'
      e.target.classList.add('empty')
    }
    playerTurn = false
    turnNumber++
    const allBoardBlocks = document.querySelectorAll('#computer div')
    allBoardBlocks.forEach(block => block.replaceWith(block.cloneNode(true)))
    setTimeout(computerGo, 2000)
  }
}

// Define the computers go
function computerGo() {
  if (!gameOver) {
    turnDisplay.textContent = 'Computers Turn!'
    infoDisplay.textContent = 'The computer is thinking...'

    setTimeout(() => {
      let randomGo = Math.floor(Math.random() * width * width)
      const allBoardBlocks = document.querySelectorAll('#player div')

      if (allBoardBlocks[randomGo].classList.contains('taken') &&
          allBoardBlocks[randomGo].classList.contains('boom')){
            computersGo()
            return
          } else if (allBoardBlocks[randomGo].classList.contains('taken') &&
                      !allBoardBlocks[randomGo].classList.contains('taken')){
                        allBoardBlocks[randomGo].classList.add('boom')
                        infoDisplay.textContent = 'The computer hit your ship!'
                        let classes = Array.from(allBoardBlocks[randomGo].classList)
                        classes = classes.filter(className => className !== 'block')
                        classes = classes.filter(className => className !== 'boom')
                        classes = classes.filter(className => className !== 'taken')
                        computerHits.push(...classes)
                        checkScore('computer', computerHits, computerSunkShips)
          } else {
            infoDisplay.textContent = 'Nothing hit this time.'
            allBoardBlocks[randomGo].classList.add('empty')
          }
    }, 1000)

    setTimeout(() => {
      playerTurn = true
      turnDisplay.textContent = 'Your Turn!'
      infoDisplay.textContent = 'Please take your shot.'
      const allBoardBlocks = document.querySelectorAll('#computer div')
      allBoardBlocks.forEach(block => block.addEventListener('click',handleClick))
    }, 3000)
  }
}

function checkScore(user, userHits, userSunkShips) {

  function checkShip(shipName, shipLength) {
    if (userHits.filter(storedShipName => storedShipName === shipName).length === shipLength){
      if (user === 'player') {
        infoDisplay.textContent = `you sunk the computer's ${shipName}`
        playerHits = userHits.filter(storedShipName => storedShipName !== shipName)
      }
      if (user === 'computer') {
        infoDisplay.textContent = `the computer sunk your ${shipName}`
        computerHits = userHits.filter(storedShipName => storedShipName !== shipName)
      }
      userSunkShips.push(shipName)
    }
  }

  checkShip('destroyer', 2)
  checkShip('submarine', 3)
  checkShip('cruiser', 3)
  checkShip('battleship', 4)
  checkShip('carrier', 5)

  if(playerSunkShips.length === 5) {
    infoDisplay.textContent = 'you sunk all the computers ships. YOU WON!!'
    gameOver = true
  }
  if(computerSunkShips.length === 5) {
    infoDisplay.textContent = 'The compuer has sunk all your ships. You Lost!'
    gameOver = true
  }
  if (gameOver === true) {
    saveScore(turnNumber);
  }
}

  function saveScore(score) {
    const userName = getPlayerName();    
    let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          scores = JSON.parse(scoresText);
        }
        scores = updateScores(userName, score, scores);
    
        localStorage.setItem('scores', JSON.stringify(scores));
        window.location = "scores.html"
      }

  function updateScores(userName, score, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };
    
        let found = false;
        for (const [i, prevScore] of scores.entries()) {
          if (score > prevScore.score) {
            scores.splice(i, 0, newScore);
            found = true;
            break;
          }
        }
    
        if (!found) {
          scores.push(newScore);
        }
    
        if (scores.length > 10) {
          scores.length = 10;
        }
    
        return scores;
  }