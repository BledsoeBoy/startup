import React from 'react';
import "./play.css";

import { Players } from './players';
import { GameEvent, GameNotifier } from './gameNotifier';
import './players.css';
import { Button } from 'react-bootstrap';

export function Play(props){

  var playerName;


var gamesBoardContainer;
const width = 10
var infoDisplay;
var turnDisplay;


async function createBoard(color, user) {
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

const destroyer = new Ship('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]
let notDropped

// Setup Computer's board
let angle = 0
async function addShipPiece(user, angle, ship, startId) {
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


let draggedShip


async function dropShip() {
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
let turnNumber = 0
let socket

let playerHits = []
let computerHits = []
const playerSunkShips = []
const computerSunkShips = []

function handleClick(e) {
  if (!gameOver) {
    turnNumber++
    if (e.target.classList.contains('taken') &&
        (e.target.classList.contains('boom') || e.target.classList.contains('empty'))){
          infoDisplay.textContent = 'You already went here'
      } 
    if (e.target.classList.contains('taken') &&
            !e.target.classList.contains('boom')) {
          e.target.classList.add('boom') 
          infoDisplay.textContent = 'You hit a ship!'
          let classes = Array.from(e.target.classList)
          classes = classes.filter(className => className !== 'block')
          classes = classes.filter(className => className !== 'boom')
          classes = classes.filter(className => className !== 'taken')
          playerHits.push(...classes)
          checkScore('player', playerHits, playerSunkShips)
      }
    else if (!e.target.classList.contains('taken')) {
      infoDisplay.textContent = 'Miss!!'
      e.target.classList.add('empty')
    }
    playerTurn = false
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
          } 
      else if (allBoardBlocks[randomGo].classList.contains('taken') &&
              !allBoardBlocks[randomGo].classList.contains('boom')){
                allBoardBlocks[randomGo].classList.add('boom')
                infoDisplay.textContent = 'The computer hit your ship!'
                let classes = Array.from(allBoardBlocks[randomGo].classList)
                classes = classes.filter(className => className !== 'block')
                classes = classes.filter(className => className !== 'boom')
                classes = classes.filter(className => className !== 'taken')
                computerHits.push(...classes)
                checkScore('computer', computerHits, computerSunkShips)
          } 
          else {
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
        infoDisplay.textContent = `You sunk the computer's ${shipName}`
        playerHits = userHits.filter(storedShipName => storedShipName !== shipName)
      }
      if (user === 'computer') {
        infoDisplay.textContent = `The computer sunk your ${shipName}`
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
    infoDisplay.textContent = 'You sunk all the computers ships. YOU WON!!'
    gameOver = true
  }
  if(computerSunkShips.length === 5) {
    infoDisplay.textContent = 'The computer has sunk all your ships. You Lost!'
    gameOver = true
  }
  if (gameOver === true) {
    saveScore(turnNumber);
  }
}



function updateScoresLocal(newScore) {
  let scores = [];
  const scoresText = localStorage.getItem('scores');
  if (scoresText) {
    scores = JSON.parse(scoresText);
  }

  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore < prevScore.score) {
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

  localStorage.setItem('scores', JSON.stringify(scores));
}

  async function startGame(props) {
    if (playerTurn === undefined) {
        const userName = props.userName;
        const allBoardBlocks = document.querySelectorAll('#computer div')
        allBoardBlocks.forEach(block => block.addEventListener('click', handleClick))
        playerTurn = true
        turnDisplay.textContent = 'Your Turn!'
        infoDisplay.textContent = 'The game has started! Sink 5 battleships to win!!'
        GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
    }
  }  

  async function saveScore(score) {
    const userName = props.userName;
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };
  
    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newScore),
      });
  
      // Let other players know the game has concluded
      GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
  
      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      updateScoresLocal(newScore);
    }
  
    function delayer() {
      window.location = "scores"
    }
    setTimeout(delayer, 5000)
  }

  React.useEffect(()=>{   
        gamesBoardContainer = document.querySelector('#gamesboard-container');
        infoDisplay = document.querySelector('#info');
        turnDisplay = document.querySelector('#turn-display');
        createBoard('hsl(200, 100%, 50%)', 'player')
        createBoard('hsl(200, 100%, 50%)', 'computer')
        ships.forEach(ship => addShipPiece('computer', angle, ship))
        playerName = document.querySelector('.player-name');
        playerName.textContent = props.userName;
        dropShip();
    });
    return(
        <main className="bg-secondary">
          <div className="headplay">
            <div>
              <h1>Playing</h1>          
            </div>
            <div><h5>Player: <span className="player-name"></span></h5></div>
            <div id="info"></div>
            <Button variant='success' id="start-btn" onClick={() => startGame(props)}>
              Start
            </Button>
          </div>
          <div className="info-container">
            <div>Who's Turn: <span id="turn-display"></span></div>
            <Players userName={props.userName} />
          </div>
    
          <div id="gamesboard-container"></div>
          <div className="resetbtn">
            <form method="get" action="setup">
              <button type="submit" className="btn btn-danger">Restart</button>
            </form>
          </div>
      </main>
    );
}