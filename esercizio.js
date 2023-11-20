function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getWinner(randomNumber, player1, player2) {
    var player1distance = Math.abs(randomNumber - player1);
    var player2distance = Math.abs(randomNumber - player2);
    if (player1 === randomNumber) {
        return "Il giocatore 1 ha azzeccato il numero casuale!";
    }
    else if (player2 === randomNumber) {
        return "Il giocatore 2 ha azzeccato il numero casuale!";
    }
    else if (player1distance < player2distance) {
        return "Nessuno ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
    }
    else if (player2distance < player1distance) {
        return "Nessuno ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
    }
    else {
        return "Nessuno ha azzeccato il numero casuale, entrambi i giocatori sono alla stessa distanza!";
    }
}
var player1 = 5;
var player2 = 10;
var randomNumber = getRandomNumber(1, 100);
console.log(getWinner(randomNumber, player1, player2));
