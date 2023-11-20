function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getWinner(
  randomNumber: number,
  player1: number,
  player2: number
): string {
  const player1distance = Math.abs(randomNumber - player1);
  const player2distance = Math.abs(randomNumber - player2);

  if (player1 === randomNumber) {
    return "Il giocatore 1 ha azzeccato il numero casuale!";
  } else if (player2 === randomNumber) {
    return "Il giocatore 2 ha azzeccato il numero casuale!";
  } else if (player1distance < player2distance) {
    return "Nessuno ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
  } else if (player2distance < player1distance) {
    return "Nessuno ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
  } else {
    return "Entrambi i giocatori sono alla stessa distanza!";
  }
}

const player1 = 5;
const player2 = 10;
const randomNumber = getRandomNumber(1, 100);

console.log(getWinner(randomNumber, player1, player2));
