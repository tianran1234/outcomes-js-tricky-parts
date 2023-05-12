function guessingGame() {
    let target = Math.floor(Math.random() * 100);
    let count = 0;
    let isOver = false;

    return function makeAGuess(num) {
        if (isOver) return "The game is over, you already won!";
        
        if (num === target) {
            count ++;
            isOver = true;
            let guess = count === 1 ? "guess" : "guesses";
            return `You win! You found ${target} in ${count} ${guess}.`;
        }
        
        if (num < target) {
            count ++;
            return `${num} is too low!`;
        }
        if (num > target) {
            count ++;
            return `${num} is too high!`;
        }
    }
}

module.exports = { guessingGame };
