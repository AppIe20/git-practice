const colorWords = [
  { ja: "赤", en: "red" },
  { ja: "青", en: "blue" },
  { ja: "黄色", en: "yellow" },
  { ja: "緑", en: "green" },
  { ja: "黒", en: "black" },
  { ja: "白", en: "white" },
  { ja: "灰色", en: "gray" },
  { ja: "紫", en: "purple" },
  { ja: "水色", en: "cyan" },
  { ja: "ピンク", en: "pink" }
];

let currentQuestion = null;

function nextQuestion() {
  const questionEl = document.getElementById("question");
  const resultEl = document.getElementById("result");
  const inputEl = document.getElementById("answerInput");

  // ランダムに1問選ぶ
  currentQuestion = colorWords[Math.floor(Math.random() * colorWords.length)];

  questionEl.textContent = `「${currentQuestion.ja}」のスペルは？`;
  resultEl.textContent = "";
  inputEl.value = "";
}

function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const resultEl = document.getElementById("result");

  if (input === currentQuestion.en) {
    resultEl.textContent = "✅ 正解！";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = `❌ 不正解！正解は "${currentQuestion.en}" です。`;
    resultEl.style.color = "red";
  }
}

// 初回の出題
window.onload = nextQuestion;
