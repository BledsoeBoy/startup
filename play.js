class Game {
    constructor() {
        let playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Unknown player';
    }
}

const game = new Game();