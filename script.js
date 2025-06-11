let data = ["", "", "", "", "", "", "", "", ""];
let count = 0;
let lock = false;

const title = document.getElementById("title");
const boxes = document.getElementsByClassName("box");

function handleClick(box, index) {
  if (lock || data[index] !== "") return;

  const emoji = count % 2 === 0 ? "❌" : "⭕";
  data[index] = emoji;
  box.textContent = emoji;
  count++;

  checkWin();
}

function checkWin() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (const [a, b, c] of wins) {
    if (data[a] && data[a] === data[b] && data[b] === data[c]) {
      declareWinner(data[a]);
      return;
    }
  }

  if (count === 9) {
    title.innerHTML = "🤝 It's a <span>Draw</span>!";
    lock = true;
  }
}

function declareWinner(winner) {
  lock = true;
  title.innerHTML = `🎉 Congratulations: <span>${winner}</span> won!`;
}

function resetGame() {
  data = ["", "", "", "", "", "", "", "", ""];
  count = 0;
  lock = false;
  title.innerHTML = 'Tic Tac Toe Game In <span>JavaScript</span>';
  Array.from(boxes).forEach(box => box.textContent = "");
}
