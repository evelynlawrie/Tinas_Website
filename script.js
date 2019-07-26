var linkList = ['http://doge2048.com/', 'https://geoguessr.com/', 'https://agar.io/#ffa', 'http://slither.io/', 'http://www.sinuousgame.com/'];

function randGame() {
  var game = linkList[Math.round(Math.random() * (linkList.length -1))];
  window.location.href = game;
}
