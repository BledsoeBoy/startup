# Startup Project- Battleship
## Elevator Pitch
Have you ever caught yourself just mindlessly scrolling through the internet to find something to do? Well, what better thing do you have to do than play a nice and classic *board* game? Here it is the new and innovative version of Battleship! As a game known around the world for nice, good, competitive fun, now, instead of having to hall this board game equipment around waiting for a moment of free time, you can easily play it right on the easily accessible world-wide-web. This game comes with some of the great styling and design of the classic battleship while giving you more game-telling statistics than ever before! You can create your own login information, set up your strategic placement of your battle boats, and have fun playing with your friends! You can now know how much time each player has taken on each of their turns, how many moves have been made, and at the end of the game, you can see if you had any record-setting times or moves on your win! Each player will be able to decide where they want to "shoot" to be able to sink a ship each turn, while actively knowing if you hit, sunk, or missed a ship!

## Design
My Login Page and Setup Battleships pages:
![Login and Setup for readme](https://github.com/BledsoeBoy/startup/assets/144291641/23d3bb5e-738d-4d29-8d49-4a2ffe195edd)

My Play and Leaderboard pages:
![Play and Leaderboard for readme](https://github.com/BledsoeBoy/startup/assets/144291641/2098716d-580c-4161-ae56-08453f7359e9)

## Key features

- Secure login over HTTPS
- Ability to log in as player
- Display of setup board
- Choosing where and how to put ships onto playing board
- Moves used and time spent of each player displayed in realtime
- Ability to lock-in choices to try and hit a ship
- Records kept for both time and moves used of winner

## Technologies

I will implement these technologies within the application:

- **HTML** - Use of correct HTBL formatting and language use. Will include 4 pages: 1. Login 2. Ship Setup 3. Play 4. Leaderboard/scores
- **CSS** - Good styling practices including simple, yet good-looking appearances, not overcrowding the space, and making it user-friendly.
- **JavaScript** - Provides login functionality, user interaction allowing for gameplay, and end-of-turn lock-in choices button.
- **Web Service** - Backend service with endpoints for:
  - login
  - retrieving initial setup
  - retrieving turn selections
  - submitting initial setup
  - submitting turn selections
  - retrieving hit, sink, miss status
- **Database Persistence** - Store users, turn choices, and records in database.
- **Login** - Register and login players/users. Credentials securely stored in database.
- **WebSocket** - As each user plays, time and moves used are displayed to all users. Also tells whose turn it is. 
- **React** - Application using React to add components and request routing

## Deliverables
In this newest deliverable with the date 9/30/2023 I created all of the html pages I will need. I implemented the login initial page, an idea of how the setup should look, when setting up your own battleships. I added a play html page that simulates playing although does virtually nothing with just html, and I also included a scores page that shows records according to time and turns spent by each player. What I want to be displayed is shown, but has a lot of placeholders, like data for the scores page, where the ships are on the setup, amongst other things. I am closest to done on the html index page but I am still not sure if that is everything. There is login implementation but has a placeholder. There is data to be stored in the scores page and a websocket will be used to get actual time date of time and turns as the users play the game. There are also links to be able to switch between each of the pages.
