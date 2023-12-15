import React from 'react';
import "./setup.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play";
}

var optionContainer;
var gamesBoardContainer;
var width;

var angle;
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

// Creating Ships
class Ship {
  constructor(name, length) {
    this.name = name
    this.length = length
  } 
}
var ships;
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
let optionShips;
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

let gameOver = false
let playerTurn

//Start Game
function startGame() {
    const infoDisplay = document.querySelector('#info')
    if (playerTurn === undefined) {
    if(optionContainer.children.length != 0)
    {
      infoDisplay.textContent = 'Please place all your pieces first'
    }
    else {
      window.location = "play"
    }
  }
}

export function Setup() {
    React.useEffect(()=> {

        optionContainer = document.querySelector('.option-container')
        gamesBoardContainer = document.querySelector('#gamesboard-container')
        width = 10
        angle = 0;
        gameOver = false;
        const destroyer = new Ship('destroyer', 2)
        const submarine = new Ship('submarine', 3)
        const cruiser = new Ship('cruiser', 3)
        const battleship = new Ship('battleship', 4)
        const carrier = new Ship('carrier', 5)
        
        ships = [destroyer, submarine, cruiser, battleship, carrier]
        createBoard('hsl(200, 100%, 50%)', 'player')
        optionShips = Array.from(optionContainer.children)
        optionShips.forEach(optionShip => optionShip.addEventListener(`dragstart`, dragStart))

        const allPlayerBlocks = document.querySelectorAll('#player div')
        allPlayerBlocks.forEach(playerBlock => {
            playerBlock.addEventListener('dragover', dragOver)
            playerBlock.addEventListener('drop', dropShip)
        })


        localStorage.removeItem('boatCoordinates')

    });
    return (
      <main className='bg-secondary'>
      <h2><div id="info">Set up your board</div></h2>
      <div>
        <form method="get" action="setup">
          <button type="submit" className="btn btn-danger">Restart</button>
        </form>
      </div>
      <div className="play-button">
          <button type="submit" className="btn btn-success play-button" id="start-button" onClick={startGame}>Lets Play!</button>
      </div>
      <div className = "boards-container">
        <button className="btn btn-warning flipbtn" onClick={flip} id="flip-button">Rotate Ships</button>
      <div className="option-container">
        <div id="0" className="destroyer-preview destroyer" draggable="true"></div>
        <div id="1" className="submarine-preview submarine" draggable="true"></div>
        <div id="2" className="cruiser-preview cruiser" draggable="true"></div>
        <div id="3" className="battleship-preview battleship" draggable="true"></div>
        <div id="4" className="carrier-preview carrier" draggable="true"></div>
      </div>
      <div id="gamesboard-container"></div>
      </div>
    </main>
    );
}